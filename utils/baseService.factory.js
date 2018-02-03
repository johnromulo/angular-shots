(() => {
    'use strict';

    angular
        .module('app.utilModule')
        .factory('BaseService', BaseService);

    BaseService.$inject = ['$resource'];

    function BaseService($resource) {

        var acessToken = '523956f95976a4ec8b9cd9f17a86d314126a1e1261a767e7e6465ccb8bcc6ccf';
        var resourceUrl = 'https://api.dribbble.com/v1/'
        var resource = $resource(resourceUrl + 'shots/:id?per_page=24', { id: '@id' }, {
            'save': {
                url: resourceUrl,
                method: 'POST',
                isArray: false,
                headers: { 'Authorization': 'Bearer ' + acessToken },
            },
            'query': {
                method: 'GET',
                isArray: true,
                headers: { 'Authorization': 'Bearer ' + acessToken },
            },
            'findId': {
                method: 'GET',
                isArray: false,
                headers: { 'Authorization': 'Bearer ' + acessToken },
            },
            'update': {
                url: resourceUrl,
                method: 'PUT',
                headers: { 'Authorization': 'Bearer ' + acessToken }
            },
            'delete': {
                url: resourceUrl,
                method: 'DELETE',
                headers: { 'Authorization': 'Bearer ' + acessToken }
            }
        });
        return resource;
    }

})();