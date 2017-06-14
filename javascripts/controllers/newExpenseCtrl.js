app.controller("newExpenseCtrl", function($rootScope, $location, $scope, FirebaseFactory) {

	console.log ("here");
	$scope.addNewVaryExpense = () => {
		$scope.newTask.spendAmount = 0;
		$scope.newTask.uid = $rootScope.user.uid;
		console.log("add ctr" , newTask);
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewVaryExpense error", error);
		});
	};
});