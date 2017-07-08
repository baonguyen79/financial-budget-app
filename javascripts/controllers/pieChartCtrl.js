app.controller("pieChartCtrl", function($rootScope, $location, $scope) {

	// $scope.myDataSource = {
	let myDataSource = {	
    chart: {
        caption: "Budget profile of the month",
        // subcaption: {{$scope.month}},
        startingangle: "120",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: "Type : $label Total : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "Incomes",
            value: "0"
        },
        {
            label: "Expenses",
            value: "0"
        },
        {
            label: "Surplus",
            value: "0"
        },
        {
            label: "Saving For",
            value: "0"
        }
        
    ]
};

console.log("www"  , $rootScope.allSavingFor, " " , $rootScope.allIncomes);

myDataSource.data[0].value	=	$rootScope.allIncomes;
myDataSource.data[1].value	=	$rootScope.allExpenses; 
myDataSource.data[2].value	= 	$rootScope.currSurplusAmount; 
myDataSource.data[3].value	=	$rootScope.allSavingFor;


$scope.myDataSource = myDataSource;

}); 