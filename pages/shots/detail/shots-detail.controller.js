(() => {
  'use strict';

  angular
    .module('app.shotsModule')
    .controller('ShotsDetailController', ShotsController);

  ShotsController.$inject = ['$routeParams', '$rootScope', '$scope', '$filter', '$location' , 'ShotService'];

  function ShotsController($routeParams, $rootScope, $scope, $filter, $location, ShotService) {
    $scope.loading = true;
    $scope.shot = {};
    ShotService.getShots($routeParams.id).then((shot) => {
      angular.copy(shot,$scope.shot);
      $scope.loading = false;
    });

  }

})();