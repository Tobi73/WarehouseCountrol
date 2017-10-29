import express from 'express';
import path from 'path';
import product from './control/product.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

const dirpath = path.join(__dirname, '..', 'public')
console.log(dirpath)
app.set('view engine', 'ejs')
app.use('/static', express.static(dirpath));
app.use(bodyParser.json());

app.use('/product', product)
    .get('/', async (req, res) => {
    var cursor = mongoose.model('Product');
    var products = await cursor.find({}).limit(20);
    var viewModel = products.map((product) => { return {
        name: product.name,
        quantity: product.quantity
    }});
    res.render('pages/index', { products: viewModel});
})

export default app;