app.controller("ListVaryExpenseCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];

	let getItems = () => {
		FirebaseFactory.getVaryExpenses($rootScope.user.uid).then((varyExpenses) => {
			$scope.items = varyExpenses;
			console.log("varyExpenses " , varyExpenses);
			
		}).catch((error) => {
			console.log("getVaryExpenses Error", error);
		});
	};	


	getItems();

	
});