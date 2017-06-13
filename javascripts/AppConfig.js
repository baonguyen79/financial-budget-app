
app.config(function($routeProvider) {
    $routeProvider
        .when('/start', {
            templateUrl: 'partials/incomes.html',
            controller: 'getIncomeCtrl'
               
        })
        .otherwise('/start');
});
