(() => {
    'use strict';

    angular
        .module('app.utilModule')
        .factory('BaseService', BaseService);

    BaseService.$inject = ['$resource'];

    function BaseService($resource) {

        var acessToken = 'e90d315594bc7d941db90544b1440ea22fecd5327e2a6f37a91977fbd0915e6c';
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
