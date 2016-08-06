var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var models = require('./models');
var debug = require('debug')('express-example');

var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function(){
	var server = app.listen(app.get('port'), function(){
		debug('Express server listening on port ' + server.address().port);
	});
});