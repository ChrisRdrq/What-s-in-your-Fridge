const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Recipe = require('../models/recipe');

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/fridge');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

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
  const sweetSticky  = new Recipe({
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
	  	});
  return Recipe.create([sweetSticky, parmesanCrusted, mayoChicken]);
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
