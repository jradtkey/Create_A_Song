// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// get express:
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'thisIsSecret'}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
})

app.get('/first', function(req, res) {
  console.log("at 1");
  res.render('first')
})

app.post('/second', function(req, res) {
  console.log(req.body);
  console.log("at 2");
  req.session.band = [req.body.guitar]
  console.log(req.session.band);
  res.render('second', req.body)
})

app.post('/third', function(req, res) {
  console.log(req.body);
  console.log("at 3");
  req.session.band.push(req.body.drums)
  console.log(req.session.band);
  res.render('third', req.body)
})

app.post('/fourth', function(req, res) {
  console.log(req.body);
  console.log("at 4");
  req.session.band.push(req.body.bass)
  console.log(req.session.band);
  res.render('fourth', req.body)
})

app.post('/final', function(req, res) {
  console.log(req.body);
  console.log("at final");
  req.session.band.push(req.body.piano)
  var band = req.session.band
  console.log(req.session.band);
  res.render('final', req.body)
})

// tell your server which port to run on
app.listen(8000);
// print to terminal window
console.log("Listening on 8000");
