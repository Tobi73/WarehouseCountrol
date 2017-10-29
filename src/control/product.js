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

export default router;