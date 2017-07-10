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
            label: "Variable Expenses",
            value: "0"
        },
        {
            label: "Fixed Expenses",
            value: "0"
        },
        {
            label: "Saving For",
            value: "0"
        }
        
    ]
};


let income  =   $rootScope.allIncomes - ($rootScope.allFixExpenses + $rootScope.allVaryExpenses);
if (income < 0)
 {
    myDataSource.data[0].value  =   0;
}
else
{
    myDataSource.data[0].value = income;
}

console.log("income" , income  , $rootScope.allSavingFor, " " , $rootScope.allIncomes , " " , $rootScope.allFixExpenses , " " ,  $rootScope.allVaryExpenses);
myDataSource.data[1].value	=	$rootScope.allVaryExpenses; 
myDataSource.data[2].value  =   $rootScope.allFixExpenses; 
myDataSource.data[3].value	=	0;


$scope.myDataSource = myDataSource;

}); 