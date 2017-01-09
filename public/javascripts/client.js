const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/index.html',
            controller: 'homeCtrl',
            controllerAs: '$ctrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function() {
  title: 'Hello from Angular';
})
