var express = require('express');
var app = express();

//var handlers = require('./handlers/main.js');
// database configuration
//var dbSettings = require("./lib/database.js");
//dbSettings.populateDBSettings(app);


/*************** set up handlebars view engine *******************/
var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
	
app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(require('body-parser')());
/*****************************************************************/




/*************** Middleware *******************/

/**********************************************/


/*************** Routes *******************/
// Note: the route handlers have been separated into their own files
// (See the handlers directory)
app.get('/', function(req, res) {
	res.render('home');                     
});
/******************************************/


/*************** Error Handlers *******************/
// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.type('text/plain'); 
	res.send('404'); 
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.type('text/plain'); 
	res.send('500'); 
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
/*************************************************/