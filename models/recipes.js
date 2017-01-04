var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    recipe = {
    title: string,
    time: string,
    difficulty: string,
    ingredients : [
       {quantity: number, unit: string, name: string},
    ]
}
});

module.exports = mongoose.model('Recipe', recipeSchema);