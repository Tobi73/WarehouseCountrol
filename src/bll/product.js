import { Product } from './../model/schemas.js';
import * as mongodd from './../repository/mongodb/db.js';

export const add = async (body) => {
    const product = new Product({...body});
    await product.save();
}

export const search = async (name) => {
    const products = await Product.find({'name': name});
    return products;
}

export const all = async (limit) => {
    const products = await Product.find({}).limit(20);
    return products;
}