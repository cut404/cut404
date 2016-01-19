const http = require('http');
const fs = require('fs');

var Constructor = module.exports = exports = function() {
    //var logger: {console.log('Page Logged')};

};

Constructor.prototype.four04 = function(res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + '/404.html', 'utf8');
  res.write(html);
  return res.end();
}

Constructor.prototype.writeHeadHTML = function(res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
}

Constructor.prototype.writeHeadPLAIN = function(res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
}

Constructor.prototype.writeHeadJSON = function(res) {
 res.writeHead(200, {'Content-Type': 'application/json'});
}
