app.controller("ListGoalSavingCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];
	$scope.sumSaveAmount = 0;
	$scope.sumAddAmount = 0;

	let getItems = () => {
		FirebaseFactory.getSavingFor($rootScope.user.uid).then((savingFor) => {
			$scope.items = savingFor;
			// console.log("savingFor " , savingFor);
			savingFor.forEach ((item) => {
				// console.log("listVaryEx" , item.SetAmount , " " , item.Sp)
					$scope.sumSaveAmount += parseFloat(item.saveAmount);
					$scope.sumAddAmount += parseFloat(item.addAmount);
				});
			
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