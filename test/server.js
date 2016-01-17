//const http = require('http');
const Constructor = require(__dirname + '/../lib/frame');
const http = require('http');
const url = require('url');

var con = new Constructor();

var server = http.createServer((req,res) => {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;

//testing con.writeHeadHTML
  if (req.method === 'GET' && (path === '/' || path ==='/home')) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
  	con.writeHeadHTML(res);
    var greeting = '<h1>Hello World</h1>';
    res.write(greeting);
    return res.end();
//testing con.writeHeadPLAIN
  } else if (req.method === 'GET' && (path === '/plain')) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    con.writeHeadPLAIN(res);
    var greeting = 'Hello World';
    res.write(greeting);
    return res.end();
//testing con.writeHeadJSON
  } else if (req.method === 'GET' && (path === '/json')) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    con.writeHeadJSON(res);
    var greeting = "{'msg': 'Hello World'}";
    res.write(JSON.stringify(greeting));
    return res.end();
//testing four04
  } else {
      con.four04(res);
      //con.logger;
      ////////
      //res.writeHead(404, {'Content-Type': 'text/html'});
      //res.write('Page not found');
      //return res.end();
  }
}).listen(3000, () => { console.log('server started')});

module.exports = server;
