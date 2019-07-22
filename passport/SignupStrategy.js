// const passport = require('passport');
const Strategy = require ('passport-local').Strategy;
const User = require ('../models/user');


const SignupStrategy =  new Strategy(function(username, password, done){

  //what should be happening once user is signing up
  const user = username;

})

module.exports = SignupStrategy