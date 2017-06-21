app.controller("newIncomeCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Income";
	$scope.newTask = {date: new Date(),
					  month: $rootScope.month};
	$scope.isShow = false;					  
					  
	$scope.addNewIncome = () => {
		$scope.newTask.uid = $rootScope.user.uid;
  		// $scope.newTask.amount = parseFloat($scope.newTask.amount);
  		// console.log("newIncome amount" , $scope.newTask.amount);
		FirebaseFactory.postNewIncome($scope.newTask).then(() => {
			$scope.newTask = {date: new Date(),
					  title: " ",
					  amount: 0,	
					  month: $rootScope.month};
			
			$scope.isShow = true;		
			$location.url("/income/new");
		}).catch((error) => {
			console.log("addNewIncome error", error);
		});
	};
}); 