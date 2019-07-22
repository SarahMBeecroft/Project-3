const passport = require('passport');
const Strategy = require ('passport-local').Strategy;
const User = require ('../models/user');


const LoginStrategy =  new Strategy(function(username, password, done){

  //what should be happening once user is signing up

})

module.exports = LoginStrategy