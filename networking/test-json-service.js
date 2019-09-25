'use strict';
const server = require('net').createServer(connection => {
    console.log('Subscriber connected.');

    // Two message chunks that together make a whole message.
    const firstChunk = '{"type":"changed", "timesta';
    const secondChunk = 'mp":1405694370094}\n';

    // send the first chunk iddediately.
    connection.write(firstChunk);

    //After a short delay, send the other chunk.
    const timer = setTimeout(() => {
        connection.write(secondChunk);
        connection.end();
    }, 100);

    // Clear timer when the connection ends.
    connection.on('end', () => {
        clearTimeout(timer);
        console.log('Subscriber disconnected.');
    });
});

server.listen(60300, function () {
    console.log('Test server listening for subscribers...');
});