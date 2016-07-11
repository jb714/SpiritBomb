var commentsController = require("./backendControllers/commentsController");
var authController = require('./backendControllers/authController');
var passportService = require('./passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', { session: false })
var requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app){
  app.post('/comment', commentsController.postComment);

  app.post('/signin', requireSignin, authController.signin);
  app.post('/signup', authController.signup);
}

