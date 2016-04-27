(function() {
    'use strict';
    
    angular.module('app', ['ui.router', 
                           'test'])
        .config(routeConfiguration);
    
    routeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfiguration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                controller: 'AppController',
                controllerAs: 'app',
                template: '<ui-view></ui-view>'
            })
            .state('app.home', {
                url: '',
                controller: 'TestController',
                controllerAs: 'vm',
                templateUrl: 'app/TestModule/test.html'
            });
        
        $urlRouterProvider
            .when('', goHome)
            .when('/', goHome)
            .otherwise('/error/404');
        
        goHome.$inject = ['$state'];
        function goHome($state) {
            $state.go('app.home');
        }
    }
})();