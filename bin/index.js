'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _config = require('config3');

var _config2 = _interopRequireDefault(_config);

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_config2.default);
const server = _http2.default.createServer(_app2.default);
server.listen(_config2.default.port);
//# sourceMappingURL=index.js.map