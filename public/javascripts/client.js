const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
            url: '/',
            // templateUrl: './templates/home.html',
            template: `<h1>Hello</h1>`,
            controller: 'homeCtrl',
            controllerAs: '$ctrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function() {
  this.title = 'Hello from angular';
  console.log('hello from angular');
})
