app.controller("getIncomeCtrl", function($rootScope, $scope, getFirebaseFactory, caculationFactory) {
	// $scope.items = [];

	$scope.totalIncome = 0;
	$scope.totalFixExpenses = 0;
	// $scope.totalVaryExpenses.setAmount = 0;
	// $scope.totalVaryExpenses.spendAmount = 0;

	let uid = "pLPQeobtWxV9Y2qiN9T3R6BgsKs1";

	let getAll = () => {
		// getFirebaseFactory.getIncomes($rootScope.user.uid).then((incomes) => {
		getFirebaseFactory.getIncomes(uid).then((incomes) => {
			$scope.totalIncome = caculationFactory.totalIncome(incomes);


			console.log("income " , incomes , " " , $scope.totalIncome);
			
		}).catch((error) => {
			console.log("getIncomes Error", error);
		});

		getFirebaseFactory.getFixExpenses(uid).then((fixExpenses) => {
			$scope.totalFixExpenses = caculationFactory.totalFixExpenses(fixExpenses);


			console.log("fixExpenses " , fixExpenses , " " , $scope.totalFixExpenses);
			
		}).catch((error) => {
			console.log("getfixExpenses Error", error);
		});

		getFirebaseFactory.getVaryExpenses(uid).then((varyExpenses) => {
			$scope.totalVaryExpenses = caculationFactory.totalVaryExpenses(varyExpenses);

			// $scope.totalVaryExpenses.setAmount ;
			// $scope.totalVaryExpenses.spendAmount 0;

			// console.log("varyExpenses " , fixExpenses , " " , $scope.totalVaryExpenses);
			
		}).catch((error) => {
			console.log("getVaryExpenses Error", error);
		});


		getFirebaseFactory.getSavingFor(uid).then((savingFor) => {
			$scope.totalSavingFor = caculationFactory.totalSavingFor(savingFor);

			// $scope.totalVaryExpenses.setAmount ;
			// $scope.totalVaryExpenses.spendAmount 0;

			// console.log("varyExpenses " , fixExpenses , " " , $scope.totalVaryExpenses);
			
		}).catch((error) => {
			console.log("getSavingFor Error", error);
		});

	};

	getAll();

});	


