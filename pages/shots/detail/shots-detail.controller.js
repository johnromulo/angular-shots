(() => {
    'use strict';
  
    angular
      .module('app.shotsModule')
      .controller('ShotsDetailController', ShotsController);
  
    ShotsController.$inject = ['$routeParams', '$rootScope', '$scope', '$filter', '$location'];
  
    function ShotsController($routeParams, $rootScope, $scope, $filter, $location) {
      $scope.teste = { nome: "OLÁ MUNDO" };
    
    }
  
  })();