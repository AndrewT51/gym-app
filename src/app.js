'use strict';

const PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.use('/', express.static('public'));


app.get('/', function(req,res){
  return console.log('hello')
  // res.send('hello');
})

app.listen(PORT, function(){
  console.log('Listening on port ' + PORT )
})