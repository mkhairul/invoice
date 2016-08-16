app.controller('DashboardController',
  ['$window', '$scope', '$rootScope', '$interval', 'colorService',
  function($window, $scope, $rootScope, $interval, colorService){

  $rootScope.pageTitle = 'Dashboard';

  

  $scope.tabs = ['Log','Timeline','Messages'];

}]);
