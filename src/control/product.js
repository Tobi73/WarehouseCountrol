import { Router } from 'express';
import * as product from './../bll/product.js';

const router = Router();

router.post('/add', async (req, res, next) => {
    try {
        const body = req.body;
        await product.add(body);
        res.end();
    } catch (e) {
        next(e)
    }
})

router.post('/search', async (req, res, next) => {
    try {
        const name = req.body.name;
        const productName = '';
        const products = await product.search(name);
        if (products.length > 0) productName = products[0].name;
        res.redirect(`/search/${productName}`)
        res.render('pages/index', { products: products});
    } catch (e) {
        next(e);
    }
})

export default router;