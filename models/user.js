var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    ingredients: Array
});

module.exports = mongoose.model('User', userSchema);

