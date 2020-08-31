// node js hello world application

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// koa hello world application

// const Koa = require('koa');
// const app = new Koa();
 
// // response
// app.use(ctx => {
//   ctx.body = 'Hello world';
// });
 
// app.listen(3000);






const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://undefined/v1/cryptocurrency/quotes/latest/symbol=BTC',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': API_KEY
  },
  json: true,
  gzip: true
};



rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});