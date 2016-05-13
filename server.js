var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');m

var port = process.env.PORT || 8080;

app.use(express.static(__dirname)); 

app.listen(port);  

console.log('The music is playing on port ' + port);

exports = module.exports = app; 