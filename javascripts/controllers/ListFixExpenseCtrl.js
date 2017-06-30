app.controller("ListFixExpenseCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];
	$scope.sumAmount = 0;

	let getItems = () => {
		FirebaseFactory.getFixExpenses($rootScope.user.uid, $rootScope.month).then((fixExpenses) => {
			$scope.items = fixExpenses;
			// console.log("fixExpenses " , fixExpenses);
			fixExpenses.forEach ((item) => {
					$scope.sumAmount += parseFloat(item.amount);
				});
			
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


	// $scope.inputChange = (item) => {
	// 	console.log("inputChange" , item)
	// 	FirebaseFactory.editFixExpense(item).then(() => {
	// 	}).catch((error) => {
	// 		console.log("fix expense inputChange error", error);
	// 	});
	// };

	
});