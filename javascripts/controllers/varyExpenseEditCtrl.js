app.controller("varyExpenseEditCtrl", function($location, $routeParams, $scope, FirebaseFactory) {
	$scope.newTask = {};

	FirebaseFactory.getSingleVaryExpense($routeParams.id).then((results) => {
		console.log("results", results);
		$scope.newTask = results.data;
	}).catch((error) => {
		console.log("getSingleVaryExpense", error);
	});

	$scope.addNewVaryExpense = () => {
		FirebaseFactory.editVaryExpense($scope.newTask).then(() => {
			$location.url("/start");
		}).catch((error) => {
			console.log("editVaryExpense", error);
		});
	};
});