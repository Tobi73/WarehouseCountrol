'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Supplier = exports.Product = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('./../repository/mongodb/db.js');

var mongo = _interopRequireWildcard(_db);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productSchema = new _mongoose2.default.Schema({
    name: { type: String, required: true },
    unit: { type: String, required: false },
    quantity: { type: String, required: true },
    countryOfOrigin: { type: String, required: false }
});

const supplierSchema = new _mongoose2.default.Schema({
    name: { type: String, required: true },
    inn: { type: String, required: true },
    kpp: { type: String, required: false },
    city: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false }
});

const Product = exports.Product = _mongoose2.default.model('Product', productSchema);
const Supplier = exports.Supplier = _mongoose2.default.model('Supplier', supplierSchema);
//# sourceMappingURL=schemas.js.map