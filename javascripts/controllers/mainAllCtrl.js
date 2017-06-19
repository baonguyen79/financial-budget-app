app.controller("mainAllCtrl", function($rootScope, $scope, $q, FirebaseFactory, caculationFactory, gaugeFactory) {

	$scope.totIncome = 0;
	$scope.totFixExpenses = 0;

	// let uid = "pLPQeobtWxV9Y2qiN9T3R6BgsKs1";
	let perValue = 0;
	let allVaryExpenses = {};
	let allFixExpenses = {};
	let allSavingFor = {};
	let allSaving  = 0;
	let totAllSaving = 0;
	let allIncomes = 0;
	let avalFund = 0;
	let allExpenses = 0;
	let monitorArray = []
	let gaugeVal1 = 0;
	let gaugeVal2 = 0;
	let gaugeVal3 = 0;
	let gaugeVal4 = 0;
	let gaugeVal5 = 0;

	let getAll = () => {
		// FirebaseFactory.getIncomes($rootScope.user.uid).then((incomes) => {
		console.log("uid" , $rootScope.user.uid);	
		$q.all([ FirebaseFactory.getFixExpenses($rootScope.user.uid)
					, FirebaseFactory.getVaryExpenses($rootScope.user.uid)
					, FirebaseFactory.getSavingFor($rootScope.user.uid)
					, FirebaseFactory.getSaving($rootScope.user.uid)
					, FirebaseFactory.getIncomes($rootScope.user.uid)])  
 			 .then(function(results) {
 			 	console.log ("promise all" , results);

 			 	//*  Fixed  Expenses *//
 			 	allFixExpenses = caculationFactory.totalFixExpenses(results[0]);
				$scope.totFixExpenses = allFixExpenses; 
				//* Vary Expenses (object) *//
				allVaryExpenses =  caculationFactory.totalVaryExpenses(results[1]);
				$scope.totVaryExpenses = allVaryExpenses;
				//* SavingFor  (object)   *//
				allSavingFor =  caculationFactory.totalSavingFor(results[2]);
				$scope.totSavingFor =  allSavingFor;
				//* saving *//
				allSaving =  caculationFactory.totalSaving(results[3]);
				$scope.totSaving =  allSaving;
				//* All income *//
				allIncomes = caculationFactory.totalIncome(results[4]);
				$scope.totIncomes = allIncomes;

				//* Setup monitor for  Variable Expenses *//
				results[1].forEach ((item) => {
					if (item.monitorId === "1") {
						$scope.title1 = item.title;
						$scope.setAmount1 = item.setAmount;
						$scope.spendAmount1 = item.spendAmount;
						gaugeVal1 = gaugeFactory.drawLinearGauge1(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}	
					if (item.monitorId === "2") {
						$scope.title2 = item.title;
						$scope.setAmount2 = item.setAmount;
						$scope.spendAmount2 = item.spendAmount;
						gaugeVal2 = gaugeFactory.drawLinearGauge2(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}
					if (item.monitorId === "3") {
						$scope.title3 = item.title;
						$scope.setAmount3 = item.setAmount;
						$scope.spendAmount3 = item.spendAmount;
						gaugeVal3 = gaugeFactory.drawLinearGauge3(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}

				});

				//* Setup monitor for savingFor  *// 
				results[2].forEach ((item) => {
					if (item.monitorId === "4") {
						$scope.title4 = item.title;
						$scope.goalAmount4 = item.goal;
						$scope.saveAmount4 = item.saveAmount;
						$scope.imageUrl4 = item.imageUrl;
						gaugeVal4 = gaugeFactory.drawLinearGauge4(caculationFactory.calPercent(item.goal , item.saveAmount));
					}
					if (item.monitorId === "5") {
						$scope.title5 = item.title;
						$scope.goalAmount5 = item.goal;
						$scope.saveAmount5 = item.saveAmount;
						$scope.imageUrl5 = item.imageUrl;
						gaugeVal5 = gaugeFactory.drawLinearGauge5(caculationFactory.calPercent(item.goal , item.saveAmount));
					}		
					

				});

				
				// gaugeFactory.drawLinearGauge2(allSavingFor.percent);
				gaugeFactory.drawLinearGauge1(gaugeVal1);
				gaugeFactory.drawLinearGauge2(gaugeVal2);
				gaugeFactory.drawLinearGauge3(gaugeVal3);
				gaugeFactory.drawLinearGauge4(gaugeVal4);
				gaugeFactory.drawLinearGauge5(gaugeVal5);

				allExpenses =  allVaryExpenses.setAmount + allFixExpenses;
				$scope.avalFund = allIncomes - allExpenses;
				console.log("allIncomes" , allIncomes , "allExpenses" , allExpenses);

				//* Fund available gauge  *//
				gaugeFactory.drawGauge(100 - caculationFactory.calPercent(allIncomes , allExpenses));
				//*  Fixed Expenses vs Income  Gauge *//
				$('.js-gauge--1').kumaGauge({
				value: caculationFactory.calPercent(allIncomes , allFixExpenses ),
				fill : '0-#1cb42f:0-#fdbe37:50-#fa4133:100',
				showNeedle: false,
				gaugeWidth: 25,
				radius: 65,
				animationSpeed : 1500
				// background: 'lavender'

				});
				//*  Varirable Expenses  vs  Incomes *//
				$('.js-gauge--2').kumaGauge({
					value: caculationFactory.calPercent( allIncomes , allVaryExpenses.setAmount ),
					fill : '0-#1cb42f:0-#fdbe37:50-#fa4133:100',
					showNeedle: false,
					gaugeWidth: 25,
					radius: 65,
					animationSpeed : 1500
					// background: 'lavender'

				});
				//*  Saving For   *//
				$('.js-gauge--3').kumaGauge({
					value: caculationFactory.calPercent( allSavingFor.goal , allSavingFor.saveAmount ),
					fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
					showNeedle: false,
					gaugeWidth: 25,
					radius: 65,
					animationSpeed : 1500
					// background: 'lavender'
				});

//
// 				var options = {
//   tooltips: {
//     enabled: false
//   }
// };
//  	$scope.labels = ["Sales", "In-Store", "Mail-Order"];
//   $scope.data = [300, 500, 100];

//



// chart.config.options.showAllTooltips




 			 })
 			 .catch((err) => {console.log("promise All error" , err) });
		
 			 $scope.totIncomes = allIncomes;
 			 $scope.totVaryExpenses = allVaryExpenses;
	};

	getAll();
	

});	
