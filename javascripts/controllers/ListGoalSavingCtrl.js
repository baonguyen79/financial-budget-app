app.controller("ListGoalSavingCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];

	let getItems = () => {
		FirebaseFactory.getSavingFor($rootScope.user.uid).then((savingFor) => {
			$scope.items = savingFor;
			console.log("savingFor " , savingFor);
			
		}).catch((error) => {
			console.log("getSavingFor Error", error);
		});
	};	


	getItems();

	$scope.deleteItem = (id) => {
		FirebaseFactory.deleteSavingFor(id).then(() => {
				getItems();
		}).catch((error) => {
			console.log("delete savingFor error", error);
		});
	};

	
});