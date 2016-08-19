var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.env.PORT || 3000;


app.use(middleware.logger);

app.get('/', function(req, res) {
	res.send('Hello Express');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('we are the zacher company');
});

console.log('hi ' + __dirname);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port: ' + PORT);
});