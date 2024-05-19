import { Router } from 'express';
import { addToCart, getCartItems } from '../controllers/carcontroller.js';

const router = Router();

router.post('/', addToCart);
router.get('/:userId', getCartItems);

export default router;