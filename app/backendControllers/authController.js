var jwt = require('jwt-simple');
var config = require('../config');

var User = require('../models/user');

//function which takes user id and encodes it with our secret
function tokenForUser(user) {
  //first arg is info we want to encode, 2nd is the secret we want to apply to it
  var timestamp = new Date().getTime();
  //sub = subject property which in this case is the id of the specific user. iat = issued at time
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

//Authentication.signin controller
exports.signin = function(req, res, next) {
  //User has already had their email and pw auth'd, they just need a token.
  //thankfully, passport saves the token for us in req.user
  console.log("This is the user token:", tokenForUser(req.user));
  res.send( {token: tokenForUser(req.user)} );
}
//controller for db models logic

//signup serves as the stubbed out callback function to handle the req/res/next that would be
//part of the app.post http request in router.js (it is refed as Authentication.signup there)

//to pull info out of a request, use req.body
exports.signup = function(req, res, next) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email =  req.body.email;
  var password = req.body.password;

  //Record can't be saved to database unless email & password are present
  if (!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'});
  }

   //See if a user with the given email exists
   User.findOne( {email: email }, function(err, existingUser) {
    if(err) { 
      return next(err); 
    }

  //If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'})
    }

  //If a user with email does NOT exist, create and save user record
    var user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });

    user.save(function(err){
      if(err) {
        return next(err);
      }
  //Respond to request indicating the user was created
  //We respond with the specific user token
  res.json({token: tokenForUser(user)});
    });    

  });
}