var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var leadershipRouter = express.Router();
leadershipRouter.use(bodyParser.json());
leadershipRouter.route('/leadership')
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	next();
})

.get(function(req,res,next){
        res.end('Will send all the leaderships to you!');
})

.post(function(req, res, next){
    res.end('Will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all leaderships');
});

leadershipRouter.route('/:id')
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	next();
})

.get(function(req,res,next){
        res.end('Will send details of the leadership: ' + req.params.leadershipId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the leadership: ' + req.params.leadershipId + '\n');
    res.end('Will update the leadership: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting leadership: ' + req.params.leadershipId);
});

app.use('/leadership',leadershipRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});