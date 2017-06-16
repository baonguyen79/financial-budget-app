app.controller("newVaryExpenseCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Vary Expense";
	$scope.addNewVaryExpense = () => {
		$scope.newTask.spendAmount = 0;
		$scope.newTask.uid = $rootScope.user.uid;
		$scope.format = 'MM/dd/yyyy';
  		$scope.date = new Date();
  		$scope.newTask.date = $scope.date ;
  		$scope.newTask.setAmount = parseInt($scope.newTask.setAmount);
		// console.log("add ctr" , $scope.newTask);
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewVaryExpense error", error);
		});
	};
});