(function () {
    'use strict';

    angular
        .module('rms')
        .run(bootstrapper);

    function bootstrapper() {
        
        console.log('app bootstrapper loading.............');
    }

})()