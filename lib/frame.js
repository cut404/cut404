const http = require('http');
const url = require('url');

var Constructor = module.exports = exports = function() {
	//var logger: {console.log('Page Logged')};

};

Constructor.prototype.four04 = function(res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write('<h1>Page not found</h1>');
  return res.end();
}


