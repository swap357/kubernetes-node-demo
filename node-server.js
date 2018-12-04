var http = require('http');
var router = require('./router');

router.register('/ping', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello from Arya ' + now.toJSON() + ' on ' + process.env.HOSTNAME  + '\n');
  res.close();
});

var server = http.createServer(function (req, res) {
  handler = router.route(req);
  handler.process(req, res);
});

server.listen(8000);
console.log('Server running at http://:8000/');
