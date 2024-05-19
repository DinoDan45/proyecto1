import { Router } from 'express';
import { getAllCategorias } from '../controllers/catcontroller.js';

const router = Router();

router.get('/', getAllCategorias);

export default router;