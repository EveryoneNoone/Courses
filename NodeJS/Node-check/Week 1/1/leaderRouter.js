var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();

// if request contains json file it will be handled here
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})
.get(function(req,res,next){
    res.end('Will send all the leaders to you!');
})
.post(function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})
.delete(function(req, res, next){
        res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})
.get(function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.leaderId +' to you!');
})
.put(function(req, res, next){
    res.write('Updating the dish: ' + req.params.leaderId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.leaderId);
});

exports.leaderRouter = leaderRouter;