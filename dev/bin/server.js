'use strict'
const app = require('../src/app');
const http = require('http');
const degub = require('debug')('nodestr:server');
 
const { version } = require('os');
 
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
 
const server = http.createServer(app);
 
server.listen(port);
server.on('error', onError);
server.on('Listening', onListening);
console.log(' API rodando na porta ' + port);
 
function normalizePort(val) {
    const port = parseInt(val, 10);
 
    if (isNaN(port)) {
        return val;
    }
 
    if (port >= 0) {
        return port;
    }
 
    return false;
}
 
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
 
    const bind = typeof port === 'string' ?
        'pipe' + port :
        'port' + port;
 
    switch (error.code) {
        case 'EACESS':
            console.error( bind + ' requires elevated previleges ');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error( bind + ' is already in use ');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
 
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe' + addr
    : 'port' + addr.port;
 debug( 'Listening on' + bind );
}

