const express = require('express');
const router = express.Router();
const passport = require ('../passport')

//passport.authentication('local-signup', () => {

//}


// get users listings

router.get('/', function(req,res,next){
  res.send('respond with a resource')
});

router.post('/signup', pssport.authenticate('local-signup', {
  successRedirect:'/',
  failureRdeidrect:'/home',
  session:false
}))

router.post('/signin', function(req, res, next){
  res.send( 'respond with a resource')
})

module.exports = router;