import mongoose from 'mongoose';
import * as mongo from './../repository/mongodb/db.js';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    unit: {type: String, required: false},
    quantity: {type: String, required: true},
    countryOfOrigin: {type: String, required: false}
});

const supplierSchema = new mongoose.Schema({
    name: {type: String, required: true},
    inn: {type: String, required: true},
    kpp: {type: String, required: false},
    city: {type: String, required: false},
    phone: {type: String, required: false},
    email: {type: String, required: false}
})

export const Product = mongoose.model('Product', productSchema);
export const Supplier = mongoose.model('Supplier', supplierSchema);