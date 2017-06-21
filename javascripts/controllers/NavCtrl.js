app.controller("NavCtrl", function($scope, $rootScope) {
	let currDate = new Date();
	let month = new Array();
	    month[0] = "January";
	    month[1] = "February";
	    month[2] = "March";
	    month[3] = "April";
	    month[4] = "May";
	    month[5] = "June";
	    month[6] = "July";
	    month[7] = "August";
	    month[8] = "September";
	    month[9] = "October";
	    month[10] = "November";
	    month[11] = "December";

	$rootScope.month = currDate.getMonth() + 1;
	$scope.month = $rootScope.month;
	$scope.year = currDate.getFullYear();
    $scope.monthName = month[$scope.month];
});