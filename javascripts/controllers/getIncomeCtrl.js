app.controller("getIncomeCtrl", function($rootScope, $scope, FirebaseFactory, caculationFactory, gaugeFactory) {
	// $scope.items = [];

	$scope.totalIncome = 0;
	$scope.totalFixExpenses = 0;
	// $scope.totalVaryExpenses.setAmount = 0;
	// $scope.totalVaryExpenses.spendAmount = 0;

	let uid = "pLPQeobtWxV9Y2qiN9T3R6BgsKs1";
	let perValue = 0;

	let getAll = () => {
		// FirebaseFactory.getIncomes($rootScope.user.uid).then((incomes) => {
		FirebaseFactory.getIncomes(uid).then((incomes) => {
			$scope.totalIncome = caculationFactory.totalIncome(incomes);
			gaugeFactory.drawGauge(20);

			$('.js-gauge--1').kumaGauge({
				value: 75,
				fill : '0-#fa4133:0-#fdbe37:50-#1cb42f:100',
				showNeedle: false,
				gaugeWidth: 30,
				radius: 70,
				background: 'lavender'

			});
						
			console.log("income " , incomes , " " , $scope.totalIncome);
			
		}).catch((error) => {
			console.log("getIncomes Error", error);
		});

		FirebaseFactory.getFixExpenses(uid).then((fixExpenses) => {
			$scope.totalFixExpenses = caculationFactory.totalFixExpenses(fixExpenses);

			gaugeFactory.drawLinearGauge1(75);
			console.log("fixExpenses " , fixExpenses , " " , $scope.totalFixExpenses);
			
		}).catch((error) => {
			console.log("getfixExpenses Error", error);
		});

		FirebaseFactory.getVaryExpenses(uid).then((varyExpenses) => {
			$scope.totalVaryExpenses = caculationFactory.totalVaryExpenses(varyExpenses);

			// $scope.totalVaryExpenses.setAmount ;
			// $scope.totalVaryExpenses.spendAmount 0;

			// console.log("varyExpenses " , fixExpenses , " " , $scope.totalVaryExpenses);
			
		}).catch((error) => {
			console.log("getVaryExpenses Error", error);
		});


		FirebaseFactory.getSavingFor(uid).then((savingFor) => {

			$scope.totalSavingFor = caculationFactory.totalSavingFor(savingFor);
			console.log("percent" , caculationFactory.calPercent(2000 , 25))
			// $scope.totalVaryExpenses.setAmount ;
			// $scope.totalVaryExpenses.spendAmount 0;

			// console.log("varyExpenses " , fixExpenses , " " , $scope.totalVaryExpenses);
			
		}).catch((error) => {
			console.log("getSavingFor Error", error);
		});

	};

	getAll();
	

});	


