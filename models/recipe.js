var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title: String,
    time: String,
    difficulty: String,
    ingredients : [
       {quantity: Number, unit: String, name: String},
    ]
});

module.exports = mongoose.model('Recipe', recipeSchema);
