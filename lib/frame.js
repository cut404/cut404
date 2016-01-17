const http = require('http');
const url = require('url');

var Constructor = module.exports = exports = function() {
	//var logger: {console.log('Page Logged')};

};

Constructor.prototype.four04 = function(res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write('<!doctype html>\n<html lang="en">\n' +
    '\n<meta charset="utf-8">\n<title>404</title>\n' +
    '<style>img{width:600px;margin:20px auto;display:block;}*{background-color:#FFF9AF;font-family:"Arial",sans-serif;font-weight:bold;}p{display:block;width:400px;margin:0 auto;font-size:30px;}</style>\n' +
    '<img src="http://jacemontoya.com/404turtle.jpg" width="600">' +
    '\n\n<p>O sh!t!! Page Not Found!!</p>');
  return res.end();
}


