app.controller("newExpenseCtrl", function($rootScope, $location, $scope, FirebaseFactory) {

	$scope.addNewVaryExpense = () => {
		$scope.newTask.spendAmount = 0;
		$scope.newTask.uid = $rootScope.user.uid;
		console.log("add ctr" , $scope.newTask);
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewVaryExpense error", error);
		});
	};
});