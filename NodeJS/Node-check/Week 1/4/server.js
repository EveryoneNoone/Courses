var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

var hostname = 'localhost';
var port = 3000;

var dishRouter = require('./dishRouter');
app.use('/dishes', dishRouter);

var promoRouter = require('./promoRouter');
app.use('/promotions', promoRouter);

var leaderRouter = require('./leaderRouter');
app.use('/leadership', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});