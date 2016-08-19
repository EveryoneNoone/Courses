var express = require('express'),
	bodyParser = require('body-Parser');

module.exports = function(){

	var promoRouter = express.Router();

	promoRouter.use(bodyParser.json());

	promoRouter.route('/')
	.all(function(req,res,next) {
	      res.writeHead(200, { 'Content-Type': 'text/plain' });
	      next();
	})

	.get(function(req,res,next){
	        res.end('Will send all the promotion to you!');
	})

	.post(function(req, res, next){
	    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);    
	})

	.delete(function(req, res, next){
	        res.end('Deleting all promotion');
	});

	promoRouter.route('/:id')
	.all(function(req,res,next) {
	      res.writeHead(200, { 'Content-Type': 'text/plain' });
	      next();
	})

	.get(function(req,res,next){
	        res.end('Will send details of the promotion: ' + req.params.id +' to you!');
	})

	.put(function(req, res, next){
	        res.write('Updating the promotion: ' + req.params.id + '\n');
	    res.end('Will update the promotion: ' + req.body.name + 
	            ' with details: ' + req.body.description);
	})

	.delete(function(req, res, next){
	        res.end('Deleting promotion: ' + req.params.id);
	});

	return promoRouter;

};

