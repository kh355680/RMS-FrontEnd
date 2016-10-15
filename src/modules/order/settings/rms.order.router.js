(function () {
    'use strict';

    angular
        .module('rms.order')
        .config(router);

    router.$inject = ['$stateProvider'];

    function router($stateProvider) {

        console.log('rms.order router loading.............');

        $stateProvider
            .state('new-order',
            {
                url: '/new-order',
                templateUrl: 'src/modules/order/views/new-order.tpl.html',
                controller: 'rms.order.controller',
                controllerAs:'vm'
            });        
    }

})()