import { Router } from 'express';
import { controladores as categorias } from '../controllers/catcontroller.js';

const router = Router();

router.get('/categorias', categorias.getCategorias);

export default router;