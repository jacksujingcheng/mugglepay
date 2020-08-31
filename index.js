const request = require('request');
var koa = require('koa');


var app = new koa();

var price = require('./helper.js');

app.use(price.routes());

app.listen(3000);