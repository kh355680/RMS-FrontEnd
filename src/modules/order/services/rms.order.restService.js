(function () {
    'use strict';

    angular
        .module('rms.order')
        .factory('rmsOrderRestService', rmsOrderRestService);

    function rmsOrderRestService($http, baseUrl, $q) {

        

        
        var getFoodCategories = function() {

            var url = baseUrl + 'api/food/category/list';

            var deferred = $q.defer();
            $http.get(url)
                .then(function (response) {
                        deferred.resolve(response);
                    },
                    function(error) {
                        deferred.reject(error);
                    });

            return deferred.promise;
        }

        var getFoodItemsByFoodCategoryId = function(foodCategoryId) {

            var url = baseUrl + 'api/food/item/list/by/category/' + foodCategoryId;

            var deferred = $q.defer();

            $http.get(url)
                .then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        return {
            getFoodCategories: getFoodCategories,
            getFoodItemsByFoodCategoryId: getFoodItemsByFoodCategoryId
        }
    }

    rmsOrderRestService.$inject = ['$http', 'baseUrl',"$q"];

})();