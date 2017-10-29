'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _product = require('./control/product.js');

var _product2 = _interopRequireDefault(_product);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const app = (0, _express2.default)();

const dirpath = _path2.default.join(__dirname, '..', 'public');
console.log(dirpath);
app.set('view engine', 'ejs');
app.use('/static', _express2.default.static(dirpath));
app.use(_bodyParser2.default.json());

app.use('/product', _product2.default).get('/', (() => {
    var _ref = _asyncToGenerator(function* (req, res) {
        var cursor = _mongoose2.default.model('Product');
        var products = yield cursor.find({}).limit(20);
        var viewModel = products.map(function (product) {
            return {
                name: product.name,
                quantity: product.quantity
            };
        });
        res.render('pages/index', { products: viewModel });
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());

exports.default = app;
//# sourceMappingURL=app.js.map