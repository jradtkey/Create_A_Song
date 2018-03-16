var http = require('http');
var fs = require('fs');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'thisIsSecret',resave: true, saveUninitialized: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
})

app.get('/first', function(req, res) {
  req.session.band = ''
  res.render('first')
})

app.post('/second', function(req, res) {
  req.session.band = [req.body.bass]
  var band = req.session.band
  res.render('second', {band: req.body})
})

app.post('/third', function(req, res) {
  req.session.band.push(req.body.drums)
  res.render('third', req.body)
})

app.post('/fourth', function(req, res) {
  req.session.band.push(req.body.misc)
  res.render('fourth', req.body)
})

app.post('/final', function(req, res) {
  req.session.band.push(req.body.keyboard)
  var band = req.session.band
  var arr = []
  for (var i = 0; i < band.length; i++) {
    arr.push(band[i].split(" "));
  }
  band = arr
  res.render('final', {band: band})

})

// tell your server which port to run on
app.listen(process.env.PORT || 8000);
// print to terminal window
console.log("Listening on 8000");
