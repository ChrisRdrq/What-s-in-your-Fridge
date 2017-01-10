const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
            url: '/',
            templateUrl: './templates/index.html',
            controller: 'indexCtrl',
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

app.controller('indexCtrl', function($http) {
    var vm = this;
    vm.recipes = {};

    $http({
        method: 'GET',
        url: '/api/recipes'
    })
    .then(function(response) {
        vm.recipes = response.data;
        console.log(vm.recipes);
    })
  // this.ingredient = {
  //   ingredient: ''
  // };
  // this.submit = function() {
  //   ingredientsService.addIngredient(this.ingredient)
  //       .then( (response) => {
  //           $state.go('ingredients');
  //       })
  //       .catch(function(err) {
  //           alert('ERROR: ' + err);
  //       });
  // };
});
