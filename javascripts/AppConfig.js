let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    // console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    // console.log("User is not authenticated, reject route promise");
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

  //watch method that fires on change of a route.  3 inputs. 
  //event is a change event
  //currRoute is information about your current route
  //prevRoute is information about the route you came from
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    // checks to see if there is a current user
    var logged = AuthFactory.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});

app.config(function($routeProvider) {
  $routeProvider
  .when('/auth', {
   templateUrl: 'partials/auth.html',
   controller: 'AuthCtrl'
 })
  .when('/start', {
    templateUrl: 'partials/main-screen.html',
    controller: 'mainAllCtrl',
    resolve : {isAuth}   
  })
  //Income//
  .when('/start/list-incomes', {
   templateUrl: 'partials/list-incomes.html',
   controller: 'ListIncomesCtrl',
   resolve : {isAuth}
 })
  .when('/income/new', {   
   templateUrl: 'partials/income.html',
   controller: 'newIncomeCtrl',
   resolve : {isAuth}
 })
 .when('/income/edit/:id', {  
   templateUrl: 'partials/income.html',
   controller: 'editIncomeCtrl',
   resolve : {isAuth}
 })

 //Fix expenses
 .when('/start/list-fixExpenses', {
   templateUrl: 'partials/list-fix-expenses.html',
   controller: 'ListFixExpenseCtrl',
   resolve : {isAuth}
 })
  .when('/fixExpenses/edit/:id', {
    templateUrl: 'partials/fix-expense.html',
    controller: 'editFixExpenseCtrl',
    resolve : {isAuth}
  })
  .when('/fixExpense/new', {
   templateUrl: 'partials/fix-expense.html',
   controller: 'newFixExpenseCtrl',
   resolve : {isAuth}
 })

  //Vary Expenses//
  .when('/start/list-varyExpenses', {
   templateUrl: 'partials/list-vary-expenses.html',
   controller: 'ListVaryExpenseCtrl',
   resolve : {isAuth}
 })
  .when('/varyExpenses/edit/:id', {
    templateUrl: 'partials/vary-expense.html',
    controller: 'varyExpenseEditCtrl',
    resolve : {isAuth}
  })
  .when('/new/vary-expense', {
   templateUrl: 'partials/vary-expense.html',
   controller: 'newVaryExpenseCtrl',
   resolve : {isAuth}
 })

//Saving for//
   .when('/start/list-goalSaving', {
   templateUrl: 'partials/list-savingFor.html',
   controller: 'ListGoalSavingCtrl',
   resolve : {isAuth}
 })
  .when('/goal-saving/edit/:id', {
    templateUrl: 'partials/savingFor.html',
    controller: 'editGoalSavingCtrl',
    resolve : {isAuth}
  })
  .when('/goal-saving/new-saving-for', {
   templateUrl: 'partials/savingFor.html',
   controller: 'newSavingForCtrl',
   resolve : {isAuth}
 })

  //Log out
  .when('/logout', {
   templateUrl: 'partials/auth.html',
   controller: 'AuthCtrl',
   resolve : {isAuth}
 })
  .otherwise('/auth');
});
