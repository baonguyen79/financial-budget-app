app.controller("ListIncomesCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];

	let getItems = () => {
		FirebaseFactory.getIncomes($rootScope.user.uid).then((items) => {
			// items.date = new Date(items.date)
			$scope.items = items;
			console.log("List Incomes " , items);
			
		}).catch((error) => {
			console.log("getIncomes Error", error);
		});
	};	


	getItems();

	$scope.deleteItem = (id) => {
		FirebaseFactory.deleteIncome(id).then(() => {
				getItems();
		}).catch((error) => {
			console.log("delete Income error", error);
		});
	};



	
});