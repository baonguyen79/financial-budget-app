app.controller("newVaryExpenseCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Vary Expense";
	$scope.newTask = {date: new Date(),
					  monitorId: " "};

	$scope.addNewVaryExpense = () => {
		$scope.newTask.spendAmount = 0;
		// $scope.newTask.isMonitor = false;
		$scope.newTask.uid = $rootScope.user.uid;
  		$scope.newTask.setAmount = parseFloat($scope.newTask.setAmount);

  		console.log("new varyExpense" , $scope.newTask);
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewVaryExpense error", error);
		});
	};
});