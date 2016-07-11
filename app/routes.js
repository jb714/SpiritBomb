var backendCommentsController = require("./backendControllers/commentsController");


module.exports = function(app){
  app.post('/comment', backendCommentsController.postComment);
}

