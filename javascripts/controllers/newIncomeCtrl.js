app.controller("newIncomeCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Income";
	$scope.newTask = {date: new Date(),
					  month: $rootScope.month};
	$scope.addNewIncome = () => {
		$scope.newTask.uid = $rootScope.user.uid;
  		// $scope.newTask.amount = parseFloat($scope.newTask.amount);
  		// console.log("newIncome amount" , $scope.newTask.amount);
		FirebaseFactory.postNewIncome($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewIncome error", error);
		});
	};
});