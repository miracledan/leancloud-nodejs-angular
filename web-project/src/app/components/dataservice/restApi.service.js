(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($q, $log, Restangular, $state, toastr) {
        var isPrimed = false;
        var primePromise;

        Restangular.setErrorInterceptor(function(response, deferred, responseHandler, authservice, $state) {
            // if (response.status === 400) {
            //     $log.warn(response.data.msg);
            //     toastr.info(response.data.msg, '提示');
            //     return false; // error not handled
            // }

            if (response.status === 500) {
                $log.warn('亲，出了点问题，请稍后再试！');
                toastr.error('亲，出了点问题，请稍后再试！', '提示');
                return true; // error handled
            }
            return true; // error not handled
        });

        var service = {
            
        };

        return service;

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                $log.debug('Primed data');
            }
        }
    }
})();
