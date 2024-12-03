import express from 'express';
import { addToCart, getCartItems } from '../controllers/carcontroller.js';

const router = express.Router();

router.post('/add-to-cart', addToCart);
router.get('/:userId', getCartItems);

export default router;
