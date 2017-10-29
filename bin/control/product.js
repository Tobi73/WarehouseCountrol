'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _product = require('./../bll/product.js');

var product = _interopRequireWildcard(_product);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const router = (0, _express.Router)();

router.post('/add', (() => {
    var _ref = _asyncToGenerator(function* (req, res, next) {
        try {
            const body = req.body;
            yield product.add(body);
            res.end();
        } catch (e) {
            next(e);
        }
    });

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
})());

exports.default = router;
//# sourceMappingURL=product.js.map