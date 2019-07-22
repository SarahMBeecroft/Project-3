const passport = require ('passport');
const Strategy = require ('passport-local').Strategy;

//import all the strategies
// const GoogleStrategy = require ('./GoogleStrategy');
const SigninStrategy = require ('./SigninStrategy');
const SignupStrategy = require ('./SignupStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;
