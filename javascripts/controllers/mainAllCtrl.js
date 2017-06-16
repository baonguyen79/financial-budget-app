app.controller("mainAllCtrl", function($rootScope, $scope, $q, FirebaseFactory, caculationFactory, gaugeFactory) {
	// $scope.items = [];

	$scope.totIncome = 0;
	$scope.totFixExpenses = 0;

	// $scope.totalVaryExpenses.setAmount = 0;
	// $scope.totalVaryExpenses.spendAmount = 0;

	let uid = "pLPQeobtWxV9Y2qiN9T3R6BgsKs1";
	let perValue = 0;
	let allVaryExpenses = {};
	let allFixExpenses = {};
	let allSavingFor = {};
	let allSaving  = 0;
	let allIncomes = 0;
	let AllExpenses = 0;

	let getAll = () => {
		// FirebaseFactory.getIncomes($rootScope.user.uid).then((incomes) => {

		$q.all([ FirebaseFactory.getFixExpenses(uid)
					, FirebaseFactory.getVaryExpenses(uid)
					, FirebaseFactory.getSavingFor(uid)
					, FirebaseFactory.getSaving(uid)
					, FirebaseFactory.getIncomes(uid)])  
 			 .then(function(results) {
 			 	console.log ("promise all" , results);
 			 	allFixExpenses = caculationFactory.totalFixExpenses(results[0]);
				$scope.totFixExpenses = allFixExpenses; 

				allVaryExpenses =  caculationFactory.totalVaryExpenses(results[1]);
				$scope.totVaryExpenses = allVaryExpenses;
				console.log("varyExpenses " , allVaryExpenses , " " , results[1]);
				gaugeFactory.drawLinearGauge1(allVaryExpenses.percent);

				allSavingFor =  caculationFactory.totalSavingFor(results[2]);
				$scope.totSavingFor =  allSavingFor;
				gaugeFactory.drawLinearGauge2(allSavingFor.percent);

				console.log("-- tot save" , allSaving , " " , results[3] , " " , uid);
				allSaving =  caculationFactory.totalSaving(results[3]);
				$scope.totSaving =  allSaving;

				allIncomes = caculationFactory.totalIncome(results[4]);
				console.log("income" , allIncomes);

				AllExpenses =  allVaryExpenses.spendAmount + allFixExpenses;
				$scope.totIncomes = allIncomes;
				$scope.totFixExpenses = allFixExpenses;
				$scope.totVaryExpenses = allVaryExpenses;
				$scope.totAllExpenses = AllExpenses;
				gaugeFactory.drawGauge(caculationFactory.calPercent(allIncomes , AllExpenses));

				$('.js-gauge--1').kumaGauge({
				value: caculationFactory.calPercent(AllExpenses , allFixExpenses ),
				fill : '0-#1cb42f:0-#fdbe37:50-#fa4133:100',
				showNeedle: false,
				gaugeWidth: 25,
				radius: 70,
				// background: 'lavender'

				});
				console.log("total tot expenses" , AllExpenses , " " , allVaryExpenses.spendAmount);

				$('.js-gauge--2').kumaGauge({
					value: caculationFactory.calPercent( AllExpenses , allVaryExpenses.spendAmount ),
					fill : '0-#1cb42f:0-#fdbe37:50-#fa4133:100',
					showNeedle: false,
					gaugeWidth: 25,
					radius: 70,
					// background: 'lavender'

				});

				$('.js-gauge--3').kumaGauge({
					value: caculationFactory.calPercent( allSavingFor.goal , allSavingFor.saveAmount ),
					fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
					showNeedle: false,
					gaugeWidth: 25,
					radius: 70,
					// background: 'lavender'
				});


 			 })
 			 .catch((err) => {console.log("promise All error" , err) });
		
 			 $scope.totIncomes = allIncomes;
 			 $scope.totVaryExpenses = allVaryExpenses;
	};

	getAll();
	

});	
