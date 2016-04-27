(function() {
    'use strict';
    
    angular.module('app')
        .controller('AppController', AppController);
    
    AppController.$inject = [];
    function AppController() {
        var vm = this;
        
        activate();
        
        function activate() {
            console.log('Layout controller loaded!');    
        }
    }
})();