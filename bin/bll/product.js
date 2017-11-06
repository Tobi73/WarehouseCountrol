'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.search = exports.add = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _schemas = require('./../model/schemas.js');

var _db = require('./../repository/mongodb/db.js');

var mongodd = _interopRequireWildcard(_db);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const add = exports.add = (() => {
    var _ref = _asyncToGenerator(function* (body) {
        const product = new _schemas.Product(_extends({}, body));
        yield product.save();
    });

    return function add(_x) {
        return _ref.apply(this, arguments);
    };
})();

const search = exports.search = (() => {
    var _ref2 = _asyncToGenerator(function* (name) {
        const products = yield _schemas.Product.find({ 'name': name });
        return products;
    });

    return function search(_x2) {
        return _ref2.apply(this, arguments);
    };
})();
//# sourceMappingURL=product.js.map