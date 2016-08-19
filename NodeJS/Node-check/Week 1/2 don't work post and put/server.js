/**
 * Created by TyreX on 30/07/2016.
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishes = require('./dishRouter');
var promos = require('./promoRouter');
var leaders = require('./leaderRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
dishes.use(bodyParser.json());
app.use('/dishes',dishes);
promos.use(bodyParser.json());
app.use('/promos',promos);
leaders.use(bodyParser.json());
app.use('/leaders',leaders);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
