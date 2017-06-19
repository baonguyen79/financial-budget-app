app.controller("ListFixExpenseCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];

	let getItems = () => {
		FirebaseFactory.getFixExpenses($rootScope.user.uid).then((fixExpenses) => {
			$scope.items = fixExpenses;
			console.log("fixExpenses " , fixExpenses);
			
		}).catch((error) => {
			console.log("getFixExpenses Error", error);
		});
	};	


	getItems();

	$scope.deleteItem = (id) => {
		FirebaseFactory.deleteFixExpense(id).then(() => {
				getItems();
		}).catch((error) => {
			console.log("delete Fix Expense error", error);
		});
	};


	$scope.inputChange = (item) => {
		console.log("inputChange" , item)
		FirebaseFactory.editFixExpense(item).then(() => {
		}).catch((error) => {
			console.log("fix expense inputChange error", error);
		});
	};

	
});