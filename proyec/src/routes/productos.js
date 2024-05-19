import { Router } from 'express';
import { getProductsByCategory } from '../controllers/prodcontroller.js';

const router = Router();

router.get('/:categoryId', getProductsByCategory);

export default router;