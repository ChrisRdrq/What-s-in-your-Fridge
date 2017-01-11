angular.module('fridgeApp')
    .component('searchBar', {
        templateUrl: '/javascripts/ng-templates/search-bar.html',
        controller: searchBarController,
        controllerAs: '$ctrl'
    })

function searchBarController(recipeService, $filter) {
    console.log('searchBarController is alive!');
    let self = this;
    self.recipes = recipeService.recipes;

    // self.userSelection = userService.userSelection;
    // self.setSelection = function(input){
    //     userService.userSelection = input;
    };
