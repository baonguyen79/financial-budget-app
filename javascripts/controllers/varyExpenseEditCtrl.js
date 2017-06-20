app.controller("varyExpenseEditCtrl", function($location, $routeParams, $scope, FirebaseFactory) {
	$scope.newTask = {};
	$scope.heading = "Edit Vary Expense Item";

	FirebaseFactory.getSingleVaryExpense($routeParams.id).then((results) => {
		console.log("getSingleVaryExpense results", results);
		results.data.date = new Date(results.data.date);

		$scope.newTask = results.data;
	}).catch((error) => {
		console.log("getSingleVaryExpense", error);
	});

	$scope.addNewVaryExpense = () => {
		// $scope.newTask.spendAmount = parseFloat($scope.newTask.spendAmount);
		FirebaseFactory.editVaryExpense($scope.newTask).then(() => {
			$location.url("/start");
		}).catch((error) => {
			console.log("editVaryExpense", error);
		});
	};
});