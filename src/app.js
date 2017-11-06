import express from 'express';
import path from 'path';
import product from './control/product.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

const dirpath = path.join(__dirname, '..', 'public')
app.set('view engine', 'ejs')
app.use('/static', express.static(dirpath));
app.use(bodyParser.json());

app.use('/product', product)
    .get('/', async (req, res) => {
        return res.redirect(`/product/search`)
    })

export default app;