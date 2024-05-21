import express from 'express';
import { getCategories, getProductsByCategory, addToCart } from '../controllers/prodcontroller.js';

const router = express.Router();

router.get('/categorias', getCategories);
router.get('/productos/:categoryId', getProductsByCategory);
router.post('/carrito', addToCart);

export default router;
