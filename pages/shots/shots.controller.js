(() => {
  'use strict';

  angular
    .module('app.shotsModule')
    .controller('ShotsController', ShotsController);

  ShotsController.$inject = ['$routeParams', '$rootScope', '$scope', '$location', 'ShotService'];

  function ShotsController($routeParams, $rootScope, $scope, $location, ShotService) {

    $scope.loading = true;
    $scope.editar = function (id) {
      $location.path("/shot/" + id);
    }

    if($rootScope.shots === undefined || $rootScope.shots === null){
      ShotService.getShots().then((listShots) => {
        $rootScope.shots = listShots ;
        $scope.loading = false;
      });
    }else{
      $scope.loading = false;
    }
  }

})();