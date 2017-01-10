const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
            url: '/',
            templateUrl: './templates/index.html',
            controller: 'indexCtrl',
            controllerAs: '$ctrl'
        });
    $stateProvider.state('recipes', {
            url: '/recipes',
            templateUrl: './templates/recipes.html',
            controller: 'recipesCtrl',
            controllerAs: '$ctrl'
        });
    $stateProvider.state('recipeDetail', {
            url: '/recipes/detail',
            templateUrl: './templates/recipeDetail.html',
            controller: 'recipeDetailCtrl',
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
    this.title = "What's in Your Fridge?";
});

app.controller('recipesCtrl', function($http) {
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
});

app.controller('recipesDetailCtrl', function($http) {
    var vm = this;
    vm.recipe = {};

    $http({
        method: 'GET',
        url: '/api/recipes/:id'
    })
});
