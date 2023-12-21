import { Router } from "express";
import ProductManager from "../controlnicial/productManager.js";

const router = Router();
const manager = new ProductManager('./src/controlInicial/products.json');

router.get('/', async (req, res) => {
    const products = await manager.getProducts();
    res.render('realTimeProducts', {products});
})

export default router;