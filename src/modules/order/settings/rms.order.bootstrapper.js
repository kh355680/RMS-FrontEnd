(function () {
    'use strict';

    angular
        .module('rms.order')
        .run(bootstrapper);

    function bootstrapper() {

        console.log('rms.order module bootstrapper loading.............');
    }

})()