app.controller("NavCtrl", function($scope, $rootScope, $location, $route) {
	let currDate = new Date();
	$scope.monthName = [
	     "January",
	     "February",
	     "March",
	     "April",
	     "May",
	     "June",
	     "July",
	     "August",
	     "September",
	     "October",
	     "November",
	      "December"];

	$rootScope.month = currDate.getMonth() + 1;
	$scope.selectMonth = $scope.monthName [$rootScope.month];
    	// console.log ("root before" , $rootScope.month);
	
    $scope.update = () => {
		let n =  $scope.selectMonth;
	    $rootScope.month = ($scope.monthName.indexOf(n)) + 1;
	console.log("NavCtrl month" , $scope.selectMonth , " root ", $rootScope.month , "n: " , n);  

		$scope.year = currDate.getFullYear();
		$route.reload();
		// $location.url("/start");   

	};

});