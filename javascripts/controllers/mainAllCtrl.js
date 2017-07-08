app.controller("mainAllCtrl", function($rootScope, $scope, $q, FirebaseFactory, caculationFactory, gaugeFactory) {

	$scope.totIncome = 0;
	$scope.totFixExpenses = 0;
	$scope.alertColor = {};
	$rootScope.MonitorIdAval = ["1", "2", "3", "4", "5"];

	let perValue = 0;
	let allVaryExpenses = {};
	let allSavingFor    = {};
	let allFixExpenses = 0;
	let allSaving  = 0;
	let totAllSaving = 0;
	let allIncomes = 0;
	let avalFund = 0;
	let allExpenses = 0;
	let monitorArray = [];
	let gaugeVal1 = 0;
	let gaugeVal2 = 0;
	let gaugeVal3 = 0;
	let gaugeVal4 = 0;
	let gaugeVal5 = 0;
	let jsGauge1Value = 0;
	let jsGauge2Value = 0;
	let jsGauge3Vvalue = 0;

	let getAll = () => {
		
		// $rootScope.month = ((new Date()).getMonth()) + 1;
		console.log("mainAllCtrl month " , $rootScope.month);
		$scope.month = $rootScope.month;
		console.log("rootScope month" , $rootScope.month);
		$q.all([ FirebaseFactory.getFixExpenses($rootScope.user.uid, $rootScope.month),
					 FirebaseFactory.getVaryExpenses($rootScope.user.uid, $rootScope.month),
					 FirebaseFactory.getSavingFor($rootScope.user.uid),
					 FirebaseFactory.getSaving($rootScope.user.uid),
					 FirebaseFactory.getIncomes($rootScope.user.uid, $rootScope.month)])  
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
						$rootScope.MonitorIdAval.splice(0, 1);
						$scope.title1 = item.title;
						$scope.setAmount1 = item.setAmount;
						$scope.currAmount1 = item.spendAmount;
						gaugeVal1 = gaugeFactory.drawLinearGauge1(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}	
					if (item.monitorId === "2") {
						$rootScope.MonitorIdAval.splice(1, 1);
						$scope.title2 = item.title;
						$scope.setAmount2 = item.setAmount;
						$scope.currAmount2 = item.spendAmount;
						gaugeVal2 = gaugeFactory.drawLinearGauge2(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}
					if (item.monitorId === "3") {
						$rootScope.MonitorIdAval.splice(2, 1);
						$scope.title3 = item.title;
						$scope.setAmount3 = item.setAmount;
						$scope.currAmount3 = item.spendAmount;
						gaugeVal3 = gaugeFactory.drawLinearGauge3(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}
					if (item.monitorId === "4") {
						$rootScope.MonitorIdAval.splice(3, 1);
						$scope.title4 = item.title;
						$scope.setAmount4 = item.setAmount;
						$scope.currAmount4 = item.spendAmount;
						gaugeVal4 = gaugeFactory.drawLinearGauge4(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}
					if (item.monitorId === "5") {
						$rootScope.MonitorIdAval.splice(4, 1);
						$scope.title5 = item.title;
						$scope.setAmount5 = item.setAmount;
						$scope.currAmount5 = item.spendAmount;
						gaugeVal3 = gaugeFactory.drawLinearGauge5(caculationFactory.calPercent(item.setAmount , item.spendAmount));
					}

				});

				//* Setup monitor for savingFor  *// 
				results[2].forEach ((item) => {
					if (item.monitorId === "1") {
						$rootScope.MonitorIdAval.splice(0, 1);
						$scope.title1 = item.title;
						$scope.setAmount1 = item.goal;
						$scope.currAmount1 = item.saveAmount + item.addAmount;
						$scope.imageUrl1 = item.imageUrl;
						gaugeVal1 = gaugeFactory.drawLinearGauge1(caculationFactory.calPercent(item.goal , item.saveAmount));
					}
					if (item.monitorId === "2") {
						$rootScope.MonitorIdAval.splice(1, 1);
						$scope.title2 = item.title;
						$scope.setAmount2 = item.goal;
						$scope.currAmount2 = item.saveAmount + item.addAmount;
						$scope.imageUrl2 = item.imageUrl;
						gaugeVal2 = gaugeFactory.drawLinearGauge2(caculationFactory.calPercent(item.goal , item.saveAmount));
					}
					if (item.monitorId === "3") {
						$rootScope.MonitorIdAval.splice(2, 1);
						$scope.title3 = item.title;
						$scope.setAmount3 = item.goal;
						$scope.currAmount3 = item.saveAmount + item.addAmount;
						$scope.imageUrl3 = item.imageUrl;
						gaugeVal3 = gaugeFactory.drawLinearGauge3(caculationFactory.calPercent(item.goal , item.saveAmount));
					}
					if (item.monitorId === "4") {
						$rootScope.MonitorIdAval.splice(3, 1);
						$scope.title4 = item.title;
						$scope.setAmount4 = item.goal;
						$scope.currAmount4 = item.saveAmount + item.addAmount;
						$scope.imageUrl4 = item.imageUrl;
						gaugeVal4 = gaugeFactory.drawLinearGauge4(caculationFactory.calPercent(item.goal , item.saveAmount));
					}
					if (item.monitorId === "5") {
						$rootScope.MonitorIdAval.splice(4, 1);
						$scope.title5 = item.title;
						$scope.setAmount5 = item.goal;
						$scope.currAmount5 = item.saveAmount + item.addAmount;
						$scope.imageUrl5 = item.imageUrl;
						gaugeVal5 = gaugeFactory.drawLinearGauge5(caculationFactory.calPercent(item.goal , item.saveAmount));
					}		

				});

				gaugeFactory.drawLinearGauge1(gaugeVal1);
				gaugeFactory.drawLinearGauge2(gaugeVal2);
				gaugeFactory.drawLinearGauge3(gaugeVal3);
				gaugeFactory.drawLinearGauge4(gaugeVal4);
				gaugeFactory.drawLinearGauge5(gaugeVal5);

				allExpenses =  allVaryExpenses.setAmount + allFixExpenses;
				$scope.avalFund = allIncomes - (allExpenses + allSavingFor.addAmount);

				$rootScope.currSurplusAmount = $scope.avalFund;
				$rootScope.allExpenses = allExpenses;
				$rootScope.allIncomes = allIncomes;
				$rootScope.allSavingFor = allSavingFor.addAmount;

				// if (!(parseFloat($scope.avalFund) > 0) && (allIncomes > 0))
				if (!(parseFloat($scope.avalFund) > 0))
				{
					if (allIncomes > 0)
					{
					$scope.alertColor.color = "red";
					 // let amt =  parseFloat($scope.avalFund);
					 // alert("Available fund is negative!" , amt );
					}
				}

				console.log("allIncomes" , allIncomes , "allExpenses" , allExpenses , " save" , allSavingFor.addAmount);

				//* Fund available gauge  *//
				gaugeFactory.drawGauge(100 - caculationFactory.calPercent(allIncomes , allExpenses));
				//*  Fixed Expenses vs Income  Gauge *//

				
				jsGauge1Value = caculationFactory.calPercent(allIncomes , allFixExpenses );
				jsGauge2Value = caculationFactory.calPercent( allIncomes , allVaryExpenses.setAmount );
				jsGauge3Value = caculationFactory.calPercent( allSavingFor.goal , allSavingFor.saveAmount );
				
				if (isNaN(jsGauge1Value)) {jsGauge1Value = 0;}
				if (isNaN(jsGauge2Value)) {jsGauge2Value = 0;}
				if (isNaN(jsGauge3Value)) {jsGauge3Value = 0;}

				$('.js-gauge--1').kumaGauge({
				value: jsGauge1Value,
				fill : '0-#1cb42f:0-#fdbe37:50-#fa4133:100',
				showNeedle: false,
				gaugeWidth: 25,
				radius: 47,
				animationSpeed : 1500
				// background: 'lavender'

				});
				//*  Varirable Expenses  vs  Incomes *//
				$('.js-gauge--2').kumaGauge({
					value: jsGauge2Value,
					fill : '0-#1cb42f:0-#fdbe37:50-#fa4133:100',
					showNeedle: false,
					gaugeWidth: 25,
					radius: 47,
					animationSpeed : 1500
					// background: 'lavender'

				});
				//*  Saving For   *//
				$('.js-gauge--3').kumaGauge({
					value: jsGauge3Value,
					fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
					showNeedle: false,
					gaugeWidth: 25,
					radius: 47,
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
 			 .catch((err) => {console.log("promise All error" , err);});
		
 			 $scope.totIncomes = allIncomes;
 			 $scope.totVaryExpenses = allVaryExpenses;
	};

	getAll();
	

});	
