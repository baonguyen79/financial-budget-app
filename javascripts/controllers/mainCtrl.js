app.controller("mainCtrl", function($rootScope, $scope, FirebaseFactory, caculationFactory, gaugeFactory) {
	// $scope.items = [];

	$scope.totalIncome = 0;
	$scope.totalFixExpenses = 0;

	// $scope.totalVaryExpenses.setAmount = 0;
	// $scope.totalVaryExpenses.spendAmount = 0;

	let uid = "pLPQeobtWxV9Y2qiN9T3R6BgsKs1";
	let perValue = 0;
	let allVaryExpenses = {};
	let allFixExpenses = {};
	let allSavingFor = {};
	let allSaving  = {};
	let allIncomes = {};
	let totalAllExpenses = 0;

	let getAll = () => {
		// FirebaseFactory.getIncomes($rootScope.user.uid).then((incomes) => {

		FirebaseFactory.getFixExpenses(uid).then((fixExpenses) => {
			allFixExpenses = caculationFactory.totalFixExpenses(fixExpenses);
			$scope.totalFixExpenses = allFixExpenses; 

			// console.log("fixExpenses " , allFixExpenses , " " , $scope.totalFixExpenses);
			
		}).catch((error) => {
			console.log("getfixExpenses Error", error);
		});

		FirebaseFactory.getVaryExpenses(uid).then((varyExpenses) => {
			allVaryExpenses =  caculationFactory.totalVaryExpenses(varyExpenses);
			$scope.totalVaryExpenses = allVaryExpenses;
			console.log("varyExpenses " , allVaryExpenses);
			gaugeFactory.drawLinearGauge1(allVaryExpenses.percent);
			
			
			
		}).catch((error) => {
			console.log("getVaryExpenses Error", error);
		});


		FirebaseFactory.getSavingFor(uid).then((savingFor) => {

			allSavingFor =  caculationFactory.totalSavingFor(savingFor);
			$scope.totalSavingFor =  allSavingFor;
			
			// console.log("savingFor" , allSavingFor);
			gaugeFactory.drawLinearGauge2(allSavingFor.percent);
						
		}).catch((error) => {
			console.log("getSavingFor Error", error);
		});


		FirebaseFactory.getIncomes(uid).then((incomes) => {
			allIncomes = caculationFactory.totalIncome(incomes);
			totalAllExpenses =  allVaryExpenses.spendAmount + allFixExpenses;
			// console.log("income" , allIncomes);
			$scope.totalIncome = allIncomes;
			$scope.allFixExpenses = allFixExpenses;
			$scope.allVaryExpenses = allVaryExpenses;
			$scope.totalAllExpenses = totalAllExpenses;
			gaugeFactory.drawGauge(caculationFactory.calPercent(allIncomes , totalAllExpenses));

			
			$('.js-gauge--1').kumaGauge({
				value: caculationFactory.calPercent( totalAllExpenses , allFixExpenses ),
				fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
				showNeedle: false,
				gaugeWidth: 25,
				radius: 80,
				// background: 'lavender'

			});
			console.log("total all expenses" , totalAllExpenses , " " , allVaryExpenses.spendAmount);

			$('.js-gauge--2').kumaGauge({
				value: caculationFactory.calPercent( totalAllExpenses , allVaryExpenses.spendAmount ),
				fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
				showNeedle: false,
				gaugeWidth: 25,
				radius: 80,
				// background: 'lavender'

			});


			console.log ("save for " , allSavingFor.goal , " " , allSavingFor.saveAmount);
			$('.js-gauge--3').kumaGauge({
				value: caculationFactory.calPercent( allSavingFor.goal , allSavingFor.saveAmount ),
				fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
				showNeedle: false,
				gaugeWidth: 25,
				radius: 80,
				// background: 'lavender'

			});

			
						
			
		}).catch((error) => {
			console.log("getIncomes Error", error);
		});

		
		
		

	};

	getAll();
	

});	


