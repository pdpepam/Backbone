var express = require('express'),
	routes = require('./routes'),
	app = express(),
	mongoose = require('mongoose');

// configurations
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

// init additional routes
routes.init(app);

// start server listening
var server = app.listen(3000, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});

// run MongoDB
mongoose.connect('mongodb://localhost/todo-test-app-database');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log("mongodb has been started");
});