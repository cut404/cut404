const http = require('http');
const url = require('url');
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
