(() => {
    'use strict';

    angular
        .module('app.shotsModule')
        .config(config);

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/pages/shots/shots.html',
                controller: 'ShotsController'
            })

            .when('/shot/:id', {
                templateUrl: 'app/pages/shots/detail/shots-detail.html',
                controller: 'ShotsDetailController'
            })

            .otherwise({
                redirectTo: '/'
            });
    }

})();