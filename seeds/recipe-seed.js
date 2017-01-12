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

// console.log('removing old recipes...');
// Recipe.remove({})
// .then(function() {
//   console.log('creating some new recipes...');
//   const sweetSticky  = new Recipe({
//     	title: "Sweet, Sticky and Spicy Chicken",
//     	time: "22 minutes",
//     	difficulty: "Easy",
//     	ingredients : [
//        		{quantity: 2, unit: "lbs", name: "chicken breast"},
//        		{quantity: .25, unit: "cup", name: "soy sauce"},
//        		{quantity: 2, unit: "tbs", name: "honey"},
//        		{quantity: 2, unit: "tbs", name: "hot sauce"}
//     		]
//   		});
//   const parmesanCrusted = new Recipe({
//     	title: "Easy Parmesan Crusted Chicken",
//     	time: "30 minutes",
//     	difficulty: "Easy",
//     	ingredients : [
// 	       {quantity: 20, unit: "ozs", name: "chicken breast"},
// 	       {quantity: 4, unit: "tsp", name: "italian seasoned bread crumbs"},
// 	       {quantity: .25, unit: "cup", name: "parmesan"},
// 	       {quantity: .5, unit: "cup", name: "mayonaisse"}
//     		]
//   		});
//   const mayoChicken = new Recipe({
// 	    title: "Mayo Chicken",
// 	    time: "85 minutes",
// 	    difficulty: "Easy",
// 	    ingredients : [
// 	       {quantity: 2, unit: "lbs", name: "chicken breast"},
// 	       {quantity: 1, unit: "cup", name: "mayonaisse"},
// 	       {quantity: .25, unit: "cup", name: "parmesan"},
// 	       {quantity: 1, unit: "tsp", name: "salt"}
// 	    	]
// 	  	});
//   return Recipe.create([sweetSticky, parmesanCrusted, mayoChicken]);
// })
// .then(function(savedRecipes) {
//   console.log('Just saved', savedRecipes.length, 'recipes.');
//   return Recipe.find({});
// })
// .then(function(allRecipes) {
//   console.log('Printing all recipes:');
//   allRecipes.forEach(function(recipe) {
//     console.log(recipe);
//   });
//   quit();
// })
// .catch(handleError);
