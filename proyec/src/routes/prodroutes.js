import { Router } from 'express';
import { controladores as productos } from '../controllers/prodcontroller.js';

const router = Router();

router.get('/productos/:id_categoria', productos.getProductosByCategoria);

export default router;