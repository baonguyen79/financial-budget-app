app.controller("updateSurplusCtrl", function($location, $routeParams, $scope, $rootScope, FirebaseFactory) {
	$scope.newTask = {};
	incomeTrans = {};
	$scope.heading = " ";
	$scope.isAdd = false;
	isSubtract = false;
	
	let getSaving = () => {
		FirebaseFactory.getSaving($rootScope.user.uid).then((items) => {
			$scope.newTask = items[0];
			$scope.currSurplusAmount = $rootScope.currSurplusAmount;
			// console.log("getSaving " , items[0].amount , " surplus" , $rootScope.currSurplusAmount);
			($rootScope.currSurplusAmount > 0) ? $scope.isAdd = true : $scope.isSubtract = true;
			
		}).catch((error) => {
			console.log("getIncomes Error", error);
		});
			
	};	

	getSaving();

	$scope.addToSaving = (item) => {
		item.amount += parseFloat($scope.currSurplusAmount);
		console.log("addToSurplus" , item , " " , $scope.currSurplusAmount)
		FirebaseFactory.updateSaving(item).then(() => {
			// $location.url("/start");
			createIncomeTransaction (item);
			$rootScope.currSurplusAmount = 0;
			$scope.currSurplusAmount = 0;
		}).catch((error) => {
			console.log("addToSurplus error", error);
		});
	};

	$scope.subtractSaving = (item) => {
		if ($scope.currSurplusAmount > 0)
		{
			item.amount -= parseFloat($scope.currSurplusAmount);
			$scope.currSurplusAmount *= -1;
		}
		else if($scope.currSurplusAmount < 0)
		{
			item.amount += parseFloat($scope.currSurplusAmount);
		}
		else
		{
			$location.url("/start");
		};

		console.log("subtractSaving" , item , " " , $scope.currSurplusAmount)
		FirebaseFactory.updateSaving(item).then(() => {
			// $location.url("/start");
			createIncomeTransaction (item);
			$rootScope.currSurplusAmount = 0;
			$scope.currSurplusAmount = 0;
		}).catch((error) => {
			console.log("subtractSaving", error);
		});
	};
	
	let createIncomeTransaction = (item) => {
		incomeTrans.uid = item.uid;
		incomeTrans.amount = parseFloat($scope.currSurplusAmount *= -1);
		incomeTrans.date   = new Date();
		incomeTrans.title  = "Adjust transaction from surplus";
		incomeTrans.month =  $rootScope.month;
  		console.log("newIncomeTrans" , incomeTrans);
		FirebaseFactory.postNewIncome(incomeTrans).then(() => {
			$location.url("/start");
		}).catch((error) => {
			console.log("createIncomeTransaction error", error);
		});
	};
	
});