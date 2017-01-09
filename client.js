const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'homeCtrl',
            controllerAs: '$ctrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function() {

})
