var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var db             = require('./config/db');
var bodyParser     = require('body-parser');
var morgan         = require('morgan');

//Has to be used before the routes are loaded!
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

var routes         = require('./app/routes')(app);

var port = process.env.PORT || 8080;


app.use(express.static(__dirname)); 


app.listen(port);  
console.log('The music is playing on port ' + port);

//Connect mongoose, and let us know when it's successfully connected
mongoose.connect(db.url);
mongoose.connection.on('connected', function() { console.log('successful local db connection to ' + db.url) });


exports = module.exports = app; 

