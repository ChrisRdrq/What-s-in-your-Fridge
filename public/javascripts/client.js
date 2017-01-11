const app = angular.module('fridgeApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    // $stateProvider.state('index', {
    //         url: '/',
    //         templateUrl: './templates/index.html',
    //         controller: 'indexCtrl',
    //         controllerAs: '$ctrl'
    //     });
    $stateProvider.state('profile', {
        url: '/',
        templateUrl: './templates/profile.html',
        controller: 'profileCtrl',
        controllerAs: '$ctrl'
    });
    $stateProvider.state('getUsers', {
        url: '/getusers',
        templateUrl: './templates/profile.html',
        controller: 'getUsersController',
        controllerAs: '$ctrl'
    })
    $stateProvider.state('recipes', {
        url: '/recipes',
        templateUrl: './templates/recipes.html',
        controller: 'recipesCtrl',
        controllerAs: '$ctrl'
    });
    $stateProvider.state('recipeDetail', {
        url: '/recipes/detail/:id',
        templateUrl: './templates/recipeDetail.html',
        controller: 'recipeDetailCtrl',
        controllerAs: '$ctrl',
    });
    $stateProvider.state('favorites', {
        url: '/favorites',
        templateUrl: './recipes.html',
        controller: 'getUsersController',
        controllerAs: '$ctrl'
    });
    $urlRouterProvider.otherwise('/');
});

// services

// app.service('ingredientsService', function($http) {
//   console.log('ingredientsService is alive!');
//   // this.getIngredients = function() {
//   //   return $http.get('/fridge');
//   // };
//   this.addIngredient = function(ingredient) {
//     return $http.post('/ingredients/add', ingredient);
//   };
// });

app.service('userService', function($http) {
    this.getUser = function() {
        return $http.get('/user');
    };
});

app.service('recipeService', function($http) {
    this.getRecipe = function(id) {
        return $http.get('/api/recipes/' + id);
    };
})

// controllers

app.controller('getUsersController', ['$http', 'userService', function($http, userService) {
    var vm = this;
    vm.user = {};
    userService.getUser()
        .then(function(response) {
            vm.user = response.data;
            console.log(vm.user);
        })
        .catch(function(err) {
            console.log(err);
        });
}]);

app.controller('indexCtrl', function($http) {
    this.title = "What's in Your Fridge?";
});

app.controller('profileCtrl', function($http) {

    $http({
        method: 'GET',
        url: '/profile'
    })
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

app.controller('recipeDetailCtrl', function($stateParams, recipeService) {
            console.log($stateParams.id);
            recipeService.getRecipe($stateParams.id)
                .then((response) => {
                    this.recipe = response.data;
                    console.log(response.data);
                })
                .catch(function(err) {
                    alert('ERROR: ' + err);
                });
});
