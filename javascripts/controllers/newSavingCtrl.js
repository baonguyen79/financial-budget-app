app.controller("newSavingCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, FirebaseFactory) {

	$scope.addNewSaving = () => {
		$scope.newTask.spendAmount = 0;
		$scope.newTask.uid = $rootScope.user.uid;
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/start");
		}).catch((error) => {
			console.log("addNewVaryExpense error", error);
		});
	};
});