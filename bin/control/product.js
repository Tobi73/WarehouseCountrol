'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _product = require('./../bll/product.js');

var product = _interopRequireWildcard(_product);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var XlsxTemplate = require('xlsx-template');


const router = (0, _express.Router)();

router.post('/add', (() => {
    var _ref = _asyncToGenerator(function* (req, res, next) {
        try {
            const body = req.body;
            yield product.add(body);
            return res.status(200).end(JSON.stringify({ error: null }));
        } catch (e) {
            next(e);
        }
    });

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})());

router.get('/export', (() => {
    var _ref2 = _asyncToGenerator(function* (req, res, next) {
        console.log(_path2.default.join(__dirname, '..', '..', 'templates', 'export.xlsx'));
        _fs2.default.readFile(_path2.default.join(__dirname, '..', '..', 'templates', 'export.xlsx'), function (err, data) {
            console.log(XlsxTemplate);
            var template = new XlsxTemplate(data);
            var sheetNumber = 1;
            var values = {
                people: [{ name: "John Smith", age: 20 }, { name: "Bob Johnson", age: 22 }]
            };
            template.substitute(sheetNumber, values);
            const report = template.generate({ type: 'uint8array' });
            // res.status(200).send(report, {});
            return report;
        }).pipe(res);
    });

    return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
})());

router.post('/search', (() => {
    var _ref3 = _asyncToGenerator(function* (req, res, next) {
        try {
            const name = req.body.name;
            return res.send(`/product/search?product=${name}`);
        } catch (e) {
            next(e);
        }
    });

    return function (_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
    };
})());

router.get('/search', (() => {
    var _ref4 = _asyncToGenerator(function* (req, res, next) {
        const name = req.query.product;
        if (!name || name.length == 0) {
            var products = yield product.all(20);
            var viewModel = products.map(function (product) {
                return {
                    name: product.name,
                    quantity: product.quantity
                };
            });
            return res.render('pages/index', { products: viewModel });
        } else {
            var products = yield product.search(name);
            var viewModel = products.map(function (product) {
                return {
                    name: product.name,
                    quantity: product.quantity
                };
            });
            return res.render('pages/index', { products: viewModel });
        }
    });

    return function (_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
    };
})());

exports.default = router;
//# sourceMappingURL=product.js.map