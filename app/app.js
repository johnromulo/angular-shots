(() =>{
    'use strict';
    
    angular.module('app',[
        'ngRoute','ngResource','ngSanitize',
        'app.utilModule',
        'app.shotsModule'
    ])
    .run(['$rootScope',appRun])
    .config(['$routeProvider','$locationProvider',configApp]);

    function appRun($rootScope){
        
    }

    function configApp($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
    }

})();	