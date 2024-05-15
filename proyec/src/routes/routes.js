import { Router } from 'express';
import { catcontroller } from '../controllers/catcontroller.js';
import { prodcontroller } from '../controllers/prodcontroller.js';

const router = Router();

router.get('/categorias', catcontroller.getCategories);
router.get('/productos/:categoryId', prodcontroller.getProductsByCategory);

export default router;
