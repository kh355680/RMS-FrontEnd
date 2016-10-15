(function () {
    'use strict';

    angular
        .module('rms')
        .config(router);

    router.$inject = ['$stateProvider','$urlRouterProvider'];

    function router($stateProvider, $urlRouterProvider) {

        console.log('app router loading.............');

        $urlRouterProvider.when('', '/new-order');
    }

})()