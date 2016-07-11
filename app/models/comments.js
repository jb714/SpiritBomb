var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  message: String
});

var Comments = mongoose.model('comments', commentSchema);
module.exports = Comments;

//module.exports??? vs requiring the model in the server file?