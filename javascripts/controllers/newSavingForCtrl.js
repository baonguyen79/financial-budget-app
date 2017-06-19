app.controller("newSavingForCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Goal Saving for";
	$scope.newTask = {monitorId: " ",
					  imageUrl: " "};

	$scope.addNewSavingFor = () => {
		$scope.newTask.savedAmount = 0;
		$scope.newTask.uid = $rootScope.user.uid;
  		$scope.newTask.goal = parseFloat($scope.newTask.goal);

		FirebaseFactory.postNewSavingFor($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewSavingFor error", error);
		});
	};
});