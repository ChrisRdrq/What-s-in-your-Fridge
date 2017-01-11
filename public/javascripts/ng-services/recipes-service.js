angular.module('fridgeApp')
	.service('recipeService', function($http, $timeout){
		this.recipes = ['Mayo chicken', 'honey shrimp'];

		this.getAllrecipes = function(){
			return $http({
				method: 'GET',
				url: '/profile'
			});
		}
	})
