var Router = require('koa-router');
const request = require('request');
var router = Router({
  prefix: '/price'
});  

var btc_info;

request('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=a11ccd44-69ed-484e-b30c-7751efdf2a27&symbol=BTC', { json: true }, (err, res, body) => {

    console.log("success");
    btc_info = {"btc": body.data.BTC.quote.USD.price,
        "timestamp": body.status.timestamp}
});

router.get('/', (ctx, next) => {
    ctx.set('Content-Type', 'application/json')
    var JSON_btc = JSON.stringify(btc_info);
	ctx.body = JSON_btc;
	next();
});
//Routes will go here

module.exports = router;