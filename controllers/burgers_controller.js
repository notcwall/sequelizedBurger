var express = require('express');
var router = express.Router();
var models = require('../models');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.get('/', function(req, res){
	models.Burger.findAll().then(function(burgers){
		res.render('index', {
			burgers: burgers
		});
	});
});

router.post('/create', function(req, res){
	models.Burger.create({
		name: req.body.name,
		devoured: req.body.devoured
	}).then(function(){
		res.redirect('/');
	});
});

router.put('/update/:id', function(req, res){
	models.Burger.update(
	{
		devoured: req.body.devoured
	},
	{
		where: {id: req.params.id}
	}).then(function(result){
		res.redirect('/');
	}, function(rejectedPromiseError){

	});
});

module.exports = router;