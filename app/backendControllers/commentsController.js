var Comments = require('../models/comments');

exports.postComment = function(req, res, next) {
  
  
  var message = req.body.message;
  
  console.log("This is the message:", message);
  var comment = new Comments({
    message: message
  });

  comment.save(function(err){
    if(err){
      return err;
    }
    res.send(200, req.body);
  })

}