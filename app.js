var express = require( 'express' );
var app = express();
var morgan = require('morgan');
var swig = require("swig");
var routes =  require('./routes');

app.use(morgan('dev'));

app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); // when giving html files to res.render, tell it to use swig
swig.setDefaults({ cache: false });

app.use(express.static('public'));


app.use('/',routes);

// app.get('/', function(req, res){
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

app.listen(3000, function(){
	console.log('Hearing on port 3000!');
});