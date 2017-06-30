app.controller("editGoalSavingCtrl", function($location, $routeParams, $scope, $rootScope, FirebaseFactory) {
	$scope.newTask = {};
	$scope.monitorIdAval  = $rootScope.MonitorIdAval;	
	$scope.heading = "Edit savingFor Item";

	FirebaseFactory.getSingleSavingFor($routeParams.id).then((results) => {
		$scope.monitorIdAval.push(" ");
		results.data.date = new Date(results.data.date);
		$scope.newTask = results.data;
	}).catch((error) => {
		console.log("getSingleSavingFor error", error);
	});

	$scope.addNewSavingFor = () => {
		
		FirebaseFactory.editSavingFor($scope.newTask).then(() => {
			$location.url("/start");
		}).catch((error) => {
			console.log("editSavingFor error", error);
		});
	};
});

