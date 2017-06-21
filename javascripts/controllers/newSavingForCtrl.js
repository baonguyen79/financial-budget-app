app.controller("newSavingForCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Goal Saving for";
	$scope.newTask = {monitorId: " ",
					  saveAmount: 0,
					  addAmount: 0,
					  date: new Date(),	
					  imageUrl: " "};

	$scope.addNewSavingFor = () => {
		// $scope.newTask.savedAmount = 0;
		$scope.newTask.uid = $rootScope.user.uid;
  		// $scope.newTask.goal = parseFloat($scope.newTask.goal);

		FirebaseFactory.postNewSavingFor($scope.newTask).then(() => {
			// $scope.newTask = {};
			// $location.url("/start");

			$scope.newTask = {date: new Date(),
					  title: " ",
					  addAmount: 0,	
					  saveAmount: 0,
					  goal: 0,
					  monitorId: " ",
					  imageUrl: " "};
			
			$scope.isShow = true;		
			$location.url("/goal-saving/new-saving-for");

		}).catch((error) => {
			console.log("addNewSavingFor error", error);
		});
	}; 
});