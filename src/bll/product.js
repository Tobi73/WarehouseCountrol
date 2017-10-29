import { Product } from './../model/schemas.js';
import * as mongodd from './../repository/mongodb/db.js';

export const add = async (body) => {
    const product = new Product({...body});
    await product.save();
}