var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./../api/api.js');
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../../public')));
app.use('./../api/api.js', api);
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     next();
   });

module.exports = app;
