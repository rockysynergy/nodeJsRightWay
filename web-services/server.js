'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hellow World\n');
});
server.listen(60700, () => console.log('Ready!'));