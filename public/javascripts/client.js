const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
            url: '/',
            templateUrl: './templates/home.html',
            controller: 'homeCtrl',
            controllerAs: '$ctrl'
        });
    $urlRouterProvider.otherwise('/');
});

// services

app.service('ingredientsService', function($http) {
  console.log('ingredientsService is alive!');
  // this.getIngredients = function() {
  //   return $http.get('/fridge');
  // };
  this.addIngredient = function(ingredient) {
    return $http.post('/ingredients/add', ingredient);
  };
});

// controllers

app.controller('homeCtrl', function($state, ingredientsService) {
  this.ingredient = {
    ingredient: ''
  };
  this.submit = function() {
    ingredientsService.addIngredient(this.ingredient)
        .then( (response) => {
            $state.go('ingredients');
        })
        .catch(function(err) {
            alert('ERROR: ' + err);
        });
  };
});
