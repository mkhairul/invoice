app.controller('MainController',
  ['$scope', '$animate', 'localStorageService', '$alert', '$timeout', '$rootScope',
  function($scope, $animate, localStorageService, $alert, $timeout, $rootScope){

  if ( !localStorageService.get('theme') ) {
    theme = {
      color: 'theme-pink',
      template: 'theme-template-dark'
    };
    localStorageService.set('theme', theme);
  }
  localStorageService.bind($scope, 'theme');

  var introductionAlert = $alert({
    title: 'Welcome to Materialism',
    content: 'Stay a while and listen',
    placement: 'top-right',
    type: 'theme',
    container: '.alert-container-top-right',
    show: false,
    templateUrl: 'assets/tpl/partials/alert-introduction.html',
    animation: 'mat-grow-top-right'
  });

  if(!localStorageService.get('alert-introduction')) {
    $timeout(function(){
      $scope.showIntroduction();
      localStorageService.set('alert-introduction', 1);
    }, 2500);
  }

  $scope.showIntroduction = function(){
    //introductionAlert.show();
  };
}]);
