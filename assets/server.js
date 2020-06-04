"use strict";
var express = require('express') ;
var app = express() ;
var fs = require('fs') ;
var bodyParser = require('body-parser') ;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) ;
// parse application/json
app.use(bodyParser.json()) ;

app.use('/', express.static(__dirname + '/'));


app.get('/', function (req, res) {
   res.sendFile('index.html');
}) ;

app.get('/prod', function (req, res) {
   res.sendFile('indexPROD.html');
}) ;


// **** The app is listening
app.listen(3000, function () {
  console.log('App listening on port 3000!');
}) ;
