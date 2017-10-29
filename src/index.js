import http from 'http';
import config from 'config3';
import app from './app.js';

console.log(config);
const server = http.createServer(app);
server.listen(config.port);