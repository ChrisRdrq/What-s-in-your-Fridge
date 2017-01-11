var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
    local:{
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    firstName: String,
    lastName: String,
    ingredients: Array,
    favoriteRecipes: Array
});

userSchema.methods.encrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

userSchema.methods.isValidPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
