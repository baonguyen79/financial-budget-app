app.controller("newVaryExpenseCtrl", function($rootScope, $location, $scope, uibDateParser, FirebaseFactory) {
	$scope.heading = "Add New Vary Expense";
	$scope.newTask = {date: new Date(),
					  spendAmount: 0,
					  month: $rootScope.month,	
					  monitorId: " "};
	$scope.monitorIdAval  = $rootScope.MonitorIdAval;					  

	$scope.addNewVaryExpense = () => {
		// $scope.newTask.spendAmount = 0;
		// $scope.newTask.isMonitor = false;
		$scope.newTask.uid = $rootScope.user.uid;
  		// $scope.newTask.setAmount = parseFloat($scope.newTask.setAmount);

  		console.log("new varyExpense" , $scope.newTask , " " , $rootScope.usedMonitorId);
		FirebaseFactory.postNewVaryExpense($scope.newTask).then(() => {
			console.log ("newVryExpenseCtrl" , $scope.newTask );
			// $scope.newTask = {};
			// $location.url("/start");

			$scope.newTask = {date: new Date(),
					  title: " ",
					  monitorId: " ",
					  setAmount: 0,
					  spendAmount: 0,	
					  month: $rootScope.month};
			$scope.isShow = true;		
			$location.url("/new/vary-expense");		  

		}).catch((error) => {
			console.log("addNewVaryExpense error", error);
		});
	};
}); 