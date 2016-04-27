(function() {
    'use strict';
    
    angular.module('test')
        .controller('TestController', TestController);
    
    TestController.$inject = [];
    function TestController() {
        var vm = this;
        
        activate();
        
        function activate() {
            console.log('Page controller loaded!');
        }
    }
})();