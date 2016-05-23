var express = require('express');
var os = require("os");

var server = express();
var hostname = os.hostname();

const port = process.env.PORT || 3000;
const server = express();
global.__ENVIRONMENT__ = process.env.NODE_ENV || 'default';


server.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container ' + hostname + '</body></html>');
});

server.listen(port, hostname, (err) => {
    if (err) {
        console.error(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up %s:%s/ in your browser.', port, hostname, port);
});
