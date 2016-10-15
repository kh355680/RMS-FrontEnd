(function () {
    'use strict';

    angular
        .module('rms.order')
        .service('rmsOrderService', rmsOrderService);

    function rmsOrderService(rmsOrderRestService, $q) {
        
        this.getFoodCategories = function() {
            //return rmsOrderRestService.getFoodCategories();

            var deferred = $q.defer();

            rmsOrderRestService
                .getFoodCategories()
                .then(function(response) {

                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        this.getFoodItemsByFoodCategoryId = function (foodCategoryId) {

            var deferred = $q.defer();

            rmsOrderRestService
                .getFoodItemsByFoodCategoryId(foodCategoryId)
                .then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    rmsOrderService.$inject = ['rmsOrderRestService',"$q"];

})();