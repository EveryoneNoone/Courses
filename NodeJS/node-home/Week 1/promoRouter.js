var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());
promotionsRouter.route('/promotions')
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	next();
})

.get(function(req,res,next){
        res.end('Will send all the promotions to you!');
})

.post(function(req, res, next){
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all promotions');
});

promotionsRouter.route('/:id')
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	next();
})

.get(function(req,res,next){
        res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the promotion: ' + req.params.promotionId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting promotion: ' + req.params.promotionId);
});

app.use('/promotions',promotionsRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});