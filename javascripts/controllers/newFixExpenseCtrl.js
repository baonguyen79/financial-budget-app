app.controller("newFixExpenseCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Fix Expense";
	$scope.newTask = {date: new Date()};
	$scope.addNewFixExpense = () => {
		$scope.newTask.isMonitor = false;
		$scope.newTask.uid = $rootScope.user.uid;
  		$scope.newTask.amount = parseFloat($scope.newTask.amount);
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewFixExpense error", error);
		});
	};
});