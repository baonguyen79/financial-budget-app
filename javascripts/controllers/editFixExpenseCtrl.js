app.controller("editFixExpenseCtrl", function($location, $routeParams, $scope, FirebaseFactory) {
	$scope.newTask = {};
	$scope.heading = "Edit fixed Expense Item";

	FirebaseFactory.getSingleFixExpense($routeParams.id).then((results) => {
		// console.log("getSingleFixExpense results", results);
		results.data.date = new Date(results.data.date);
		$scope.newTask = results.data;
	}).catch((error) => {
		console.log("getSingleFixExpense error", error);
	});

	$scope.addNewFixExpense = () => {
		FirebaseFactory.editFixExpense($scope.newTask).then(() => {
			$location.url("/start");
		}).catch((error) => {
			console.log("editFixExpense error", error);
		});
	};
});