(() =>{
    'use strict';
    
    angular.module('app',[
        'ngRoute','ngResource',
        'app.shotsModule'
    ])
    .run(['$rootScope',appRun])
    .config(['$routeProvider','$locationProvider',configApp]);

    function appRun($rootScope){
        
    }

    function configApp($routeProvider,$locationProvider) {
        
    }

})();	