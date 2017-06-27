app.controller("ListIncomesCtrl", function($rootScope, $scope, $location, FirebaseFactory) {
	$scope.items = [];
	$scope.sumAmount = 0;

	let getItems = () => {
		FirebaseFactory.getIncomes($rootScope.user.uid , $rootScope.month).then((items) => {
			
			// items.date = new Date(items.date)
			// if (items.length > 0)
			// {
				console.log("listIncomeCtrl month " , $rootScope.month , " " , $scope.isEdit);
				$scope.items = items;

				items.forEach ((item) => {
					$scope.sumAmount += parseFloat(item.amount);
				});
								
				console.log("List Incomes " , items , " " , $scope.sumAmount);
			// };
			
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