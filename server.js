'use strict';

var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./config/db');
var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);
app.listen(port);
console.log('Server is on port ' + port);


exports = module.exports = app;

