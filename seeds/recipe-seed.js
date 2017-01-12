const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Recipe = require('../models/recipe');

//connect to database
mongoose.connect('mongodb://kathrynwood:Clover24**@ds161018.mlab.com:61018/whatsinyourfridge');

// our script will not exit until we have disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!');
}

// a simple error handler
function handleError(err) {
  console.error('ERROR:', err);
  quit();
  return err;
}

<<<<<<< HEAD
console.log('removing old recipies...');
Recipe.remove({})
.then(function() {
  console.log('creating some new recipies...');
=======
console.log('removing old recipes...');
Recipe.remove({})
.then(function() {
  console.log('creating some new recipes...');
>>>>>>> f857c70032afe3189ea2206c19970adc2694a439
  /*const sweetSticky  = new Recipe({
    	title: "Sweet, Sticky and Spicy Chicken",
    	time: "22 minutes",
    	difficulty: "Easy",
    	ingredients : [
       		{quantity: 2, unit: "lbs", name: "chicken breast"},
       		{quantity: .25, unit: "cup", name: "soy sauce"},
       		{quantity: 2, unit: "tbs", name: "honey"},
       		{quantity: 2, unit: "tbs", name: "hot sauce"}
    		]
  		});
  const parmesanCrusted = new Recipe({
    	title: "Easy Parmesan Crusted Chicken",
    	time: "30 minutes",
    	difficulty: "Easy",
    	ingredients : [
	       {quantity: 20, unit: "ozs", name: "chicken breast"},
	       {quantity: 4, unit: "tsp", name: "italian seasoned bread crumbs"},
	       {quantity: .25, unit: "cup", name: "parmesan"},
	       {quantity: .5, unit: "cup", name: "mayonaisse"}
    		]
  		});
  const mayoChicken = new Recipe({
	    title: "Mayo Chicken",
	    time: "85 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: 2, unit: "lbs", name: "chicken breast"},
	       {quantity: 1, unit: "cup", name: "mayonaisse"},
	       {quantity: .25, unit: "cup", name: "parmesan"},
	       {quantity: 1, unit: "tsp", name: "salt"}
	    	]
	  	});*/
const spinachEnchiladas = new Recipe({
	    title: "Spinach Enchiladas",
	    time: "40 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: 1, unit: "cup", name: "ricotta cheese"},
	       {quantity: 2, unit: "cup", name: "shredded montery jack cheese"},
	       {quantity: 2, unit: "cloves", name: "minced garlic"},
	       {quantity: 1, unit: "package", name: "chopped spinach"}
	    	]
	  	});
const alfredoSauce = new Recipe({
	    title: "Quick and Easy Alfredo Sauce",
	    time: "10 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: .5, unit: "cup", name: "butter"},
	       {quantity: 2, unit: "cups", name: "milk"},
	       {quantity: 6, unit: "ozs", name: "grated parmesan"},
	       {quantity: .5, unit: "cup", name: "butter"},
				 ,
	    	]
	  	});
const spinachQuiche = new Recipe({
	    title: "Spinach Quiche",
	    time: "60 minutes",
	    difficulty: "Medium",
	    ingredients : [
	       {quantity: 10, unit: "ozs", name: "chopped spinach"},
	       {quantity: 1, unit: "cup", name: "milk"},
	       {quantity: 6, unit: "oxs", name: "package herb and crumbled garlic feta"},
	       {quantity: 9, unit: "inch", name: "pie crust"}
	    	]
	  	});
const eggplantParmesan = new Recipe({
	    title: "Eggplant Parmesan",
	    time: "60 minutes",
	    difficulty: "Medium",
	    ingredients : [
	       {quantity: 6, unit: "cups", name: "spaghetti sauce"},
	       {quantity: .5, unit: "cup", name: "grated parmesan"},
	       {quantity: .25, unit: "cup", name: "parmesan"},
	       {quantity: .5, unit: "tsp", name: "dried basil"}
	    	]
	  	});
const sweetPotatoeCasserole = new Recipe({
	    title: "Sweet Potatoe Casserole",
	    time: "45 minutes",
	    difficulty: "Medium",
	    ingredients : [
	       {quantity: 4.25, unit: "cups", name: "cooked and mashed sweet potatoes"},
	       {quantity: .5, unit: "cup", name: "all-purpose flour"},
	       {quantity: .33, unit: "cup", name: "butter"},
	       {quantity: 1, unit: "cup", name: "chopped pecans"}
	    	]
	  	});
const californiaGrilledVeggieSandwich = new Recipe({
	    title: "California Grilled Veggie Sandwich",
	    time: "50 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: .5, unit: "cup", name: "crumbled feta"},
	       {quantity: 1, unit: "cup", name: "mayonnaise"},
	       {quantity: 3, unit: "cloves", name: "minced garlic"},
	       {quantity: 1, unit: "cup", name: "sliced red bell peppers"}
	    	]
	  	});
const cheesyRanchPotatoeBake = new Recipe({
	    title: "Cheesy Ranch Potatoe Bake",
	    time: "85 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: 4, unit: "lbs", name: "russet potatoes cut into cubes"},
	       {quantity: 2, unit: "tsp", name: "chilli powder"},
	       {quantity: 6, unit: "tbs", name: "butter"},
	       {quantity: 8, unit: "ozs", name: "ranch"}
	    	]
	  	});
const germanPotatoePancakes = new Recipe({
	    title: "German Potatoe Pancakes",
	    time: "45 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: 2, unit: "tbs", name: "all purpose flour"},
	       {quantity: .25, unit: "tsp", name: "baking powder"},
	       {quantity: 6, unit: "medium", name: "potatoes"},
	       {quantity: .25, unit: "tsp", name: "pepper"}
	    	]
	  	});
const oldFashionedMacAndCheese = new Recipe({
	    title: "Old Fashioned Mac and Cheese",
	    time: "65 minutes",
	    difficulty: "Easy",
	    ingredients : [
	       {quantity: 2, unit: "cups", name: "elbow macaroni"},
	       {quantity: .25, unit: "lbs", name: "shredded swiss cheese"},
	       {quantity: 2, unit: "cups", name: "milk"},
	       {quantity: 4, unit: "tbs", name: "butter"}
	    	]
	  	});






  return Recipe.create([sweetSticky, parmesanCrusted, mayoChicken, oldFashionedMacAndCheese, germanPotatoePancakes, cheesyRanchPotatoeBake, 
	californiaGrilledVeggieSandwich, sweetPotatoeCasserole, eggplantParmesan, spinachQuiche, alfredoSauce, spinachEnchiladas]);
})
.then(function(savedRecipes) {
  console.log('Just saved', savedRecipes.length, 'recipes.');
  return Recipe.find({});
})
.then(function(allRecipes) {
  console.log('Printing all recipes:');
  allRecipes.forEach(function(recipe) {
    console.log(recipe);
  });
  quit();
})
.catch(handleError);
