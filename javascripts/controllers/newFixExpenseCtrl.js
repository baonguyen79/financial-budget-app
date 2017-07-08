app.controller("newFixExpenseCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Fixed Expense";
	$scope.newTask = {date: new Date(),
					  month: $rootScope.month};

	$scope.addNewFixExpense = () => {
		$scope.newTask.uid = $rootScope.user.uid;
  		// $scope.newTask.amount = parseFloat($scope.newTask.amount);
		FirebaseFactory.postNewFixExpense($scope.newTask).then(() => {
			// $scope.newTask = {};
			// $location.url("/start");

			$scope.newTask = {date: new Date(),
					  title: " ",
					  amount: 0,	
					  month: $rootScope.month};
			
			$scope.isShow = true;		
			$location.url("/fixExpense/new");

		}).catch((error) => {
			console.log("addNewFixExpense error", error);
		});
	};
}); 