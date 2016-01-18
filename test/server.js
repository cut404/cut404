//const http = require('http');
const Constructor = require(__dirname + '/../lib/frame');
const http = require('http');
const url = require('url');
const fs = require('fs');

var con = new Constructor();

var server = http.createServer((req,res) => {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
  if (req.method === 'GET' && (path === '/' || path ==='/home')) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/../lib/index.html', 'utf8');
    res.write(html);
    return res.end();

  } else {
      con.four04(res);

  //  res.writeHead(404, {'Content-Type': 'text/html'});
  //  var html = fs.readFileSync(__dirname + '/../lib/404.html', 'utf8');
  //  res.write(html);
  //  return res.end();

  }
}).listen(3000, () => { console.log('server started')});

module.exports = server;
