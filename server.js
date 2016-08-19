var express = require('express');
var middleware = require('./middleware');
var app = express();


app.use(middleware.logger);

app.get('/', function(req, res) {
	res.send('Hello Express');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('we are the zacher company');
});

console.log('hih ' + __dirname);
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
	console.log('Express server started');
});