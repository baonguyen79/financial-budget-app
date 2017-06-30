app.controller("ListVaryExpenseCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];
	$scope.sumSetAmount = 0;
	$scope.sumSpendAmount = 0;

	let getItems = () => {
		FirebaseFactory.getVaryExpenses($rootScope.user.uid , $rootScope.month).then((varyExpenses) => {
			$scope.items = varyExpenses;

			varyExpenses.forEach ((item) => {
				// console.log("listVaryEx" , item.SetAmount , " " , item.Sp)
					$scope.sumSetAmount += parseFloat(item.setAmount);
					$scope.sumSpendAmount += parseFloat(item.spendAmount);
				});
			
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