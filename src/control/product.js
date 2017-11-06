import { Router } from 'express';
import * as product from './../bll/product.js';
var XlsxTemplate = require('xlsx-template');
import path from 'path';
import fs from 'fs';

const router = Router();

router.post('/add', async (req, res, next) => {
    try {
        const body = req.body;
        await product.add(body);
        return res.status(200).end(JSON.stringify({error: null}));
    } catch (e) {
        next(e)
    }
})

router.get('/export', async (req, res, next) => {
    console.log(path.join(__dirname, '..', '..', 'templates', 'export.xlsx'));
    fs.readFile(path.join(__dirname, '..', '..', 'templates', 'export.xlsx'), (err, data) => {
        console.log(XlsxTemplate);
        var template = new XlsxTemplate(data);
        var sheetNumber = 1;
        var values = {
                people: [
                    {name: "John Smith", age: 20},
                    {name: "Bob Johnson", age: 22}
                ]
            };
        template.substitute(sheetNumber, values);
        const report = template.generate({type: 'uint8array'});
        res.status(200).send(report);
    });
})

router.post('/search', async (req, res, next) => {
    try {
        const name = req.body.name;
        return res.send(`/product/search?product=${name}`)
    } catch (e) {
        next(e);
    }
})

router.get('/search', async (req, res, next) => {
    const name = req.query.product;
    if (!name || name.length == 0) {
        var products = await product.all(20);
        var viewModel = products.map((product) => { return {
            name: product.name,
            quantity: product.quantity
        }});
        return res.render('pages/index', { products: viewModel});
    } else {
        var products = await product.search(name);
        var viewModel = products.map((product) => { return {
            name: product.name,
            quantity: product.quantity
        }});
        return res.render('pages/index', { products: viewModel});
    }
})

export default router;