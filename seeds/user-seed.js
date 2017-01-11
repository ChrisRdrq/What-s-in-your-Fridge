
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');



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

console.log('removing old users...');
User.remove({})
.then(function() {
<<<<<<< HEAD
  console.log('creating some new user...');
  const chris   = new User({
    local: {
      email: "chris@test.com",
      password: "cccc"
    },
=======
  console.log('creating some new users...');
  const chris   = new User({ email: "chris@test.com",
  password: "cccc",
>>>>>>> f857c70032afe3189ea2206c19970adc2694a439
  firstName: "chris",
  lastName:"roderique",
  ingredients: ["shrimp", "broccoli", "honey"] });

  const josh = new User({
    local: {
      email: "josh@test.com",
      password:"jjjj"
    } ,
  firstName:"josh",
  lastName:"owen",
  ingredients: ["chicken breast", "spinach", "eggs"] });

  const katie = new User({
    local: {
      email: "katie@test.com",
      password:"kkkk"
    },
  firstName:"katie",
  lastName:"wood",
  ingredients: [
    "mayonnaise","pickles","ground beef"] });

  return User.create([chris,josh,katie]);
})
.then(function(savedUser) {
  console.log('Just saved', savedUser.length, 'users.');
  return User.find({});
})
.then(function(allUser) {
  console.log('Three users:');
  allUser.forEach(function(user) {
    console.log(user);
  });
  quit();
})
.catch(handleError);




// var userData = [
//   {
//     email: "chris@test.com",
//     password: "cccc",
//     firstName: "chris",
//     lastName:"roderique",
//     ingredients: [
//       name:"shrimp", "broccoli", "honey"]
//   },
//
// {
//   email: "josh@test.com",
//   password:"jjjj",
//   firstName:"josh",
//   lastName:"owen",
//   ingredients: [
//     name: "chicken breast", "spinach", "eggs"]
// },
//
// {
//   email: "katie@test.com",
//   password:"kkkk",
//   firstName:"katie",
//   lastName:"wood",
//   ingredients: [
//     name: "mayonnaise","pickles","ground beef"]
// }
// ]
