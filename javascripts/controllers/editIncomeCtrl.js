app.controller("editIncomeCtrl", function($location, $routeParams, $scope, FirebaseFactory) {
	$scope.newTask = {};
	$scope.heading = "Edit Income Item";

	FirebaseFactory.getSingleIncome($routeParams.id).then((results) => {
		// console.log("getSingleIncome results", results);
		results.data.date = new Date(results.data.date);
		$scope.newTask = results.data;
	}).catch((error) => {
		console.log("getSingleIncome", error);
	});

	$scope.addNewIncome = () => {
		FirebaseFactory.editIncome($scope.newTask).then(() => {
			$location.url("/start");
		}).catch((error) => {
			console.log("editIncome", error);
		});
	};
});