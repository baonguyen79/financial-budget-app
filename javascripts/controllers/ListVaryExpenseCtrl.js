app.controller("ListVaryExpenseCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];

	let getItems = () => {
		FirebaseFactory.getVaryExpenses($rootScope.user.uid , $rootScope.month).then((varyExpenses) => {
			$scope.items = varyExpenses;
			
		}).catch((error) => {
			console.log("getVaryExpenses Error", error);
		});
	};	


	getItems();

	$scope.deleteItem = (id) => {
		FirebaseFactory.deleteVaryExpense(id).then(() => {
				getItems();
		}).catch((error) => {
			console.log("delete Vary Expense error", error);
		});
	};


	// $scope.inputChange = (item) => {
	// 	console.log("inputChange" , item)
	// 	FirebaseFactory.editVaryExpense(item).then(() => {
	// 	}).catch((error) => {
	// 		console.log("vary expense inputChange error", error);
	// 	});
	// };

	
});