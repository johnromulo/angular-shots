(() => {
    'use strict';

    angular
        .module('app.shotsModule')
        .service('ShotService', ShotService);

    ShotService.$inject = ['$resource','BaseService','$q'];

    function ShotService($resource,BaseService,$q) {

        var vm = this;
        vm.getShots = getShots;

        function getShots(pId) {
            var q = $q.defer();
            var endp = "/shots";

            if(pId){
                BaseService.findId( {id:pId},
                    function(items){
                        q.resolve(items);
                        //angular.copy(items.results, vm.atividadeList);
                    },function(err){
                        q.reject(null);
                    }
                );
            }else{
                BaseService.query(
                    function(items){
                        q.resolve(items);
                        //angular.copy(items.results, vm.atividadeList);
                    },function(err){
                        q.reject(null);
                    }
                );
            }
            
            return q.promise;
		}
    }

})();