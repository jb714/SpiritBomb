var commentsController = require("./backendControllers/commentsController");
var authController = require('./backendControllers/authController');
var passportService = require('./passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', { session: false })
var requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app){

  //Entered requireAuth to protect the route
  app.get('/yeah', requireAuth, function(req, res){
    res.send("yeah");
  })
  app.post('/comment', requireAuth, commentsController.postComment);

  app.post('/signin', requireSignin, authController.signin);
  app.post('/signup', authController.signup);
}

