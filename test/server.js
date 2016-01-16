//const http = require('http');
const con = require(__dirname + '/../lib/frame.js');

  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
  if (req.method === 'GET' && (path === '/' || path ==='/home') {
    res.writeHead(200, {'Content-Type': 'text/html'});
  	var greeting = 'Hello World';
    res.write(greeting); 
    return res.end();

  } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('Page not found');
      return res.end();
  }
});

server.listen(3000, () => { console.log('server started')});

module.exports = server;
