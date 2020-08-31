const request = require('request');
var koa = require('koa');


var app = new koa();

//Set up body parsing middleware


//Require the Router we defined in movies.js
var price = require('./helper.js');

//Use the Router on the sub route /movies
app.use(price.routes());

app.listen(3000);