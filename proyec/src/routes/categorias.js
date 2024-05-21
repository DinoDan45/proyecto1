import express from 'express';
import { getAllCategorias } from '../controllers/catcontroller.js';

const router = express.Router();

router.get('/', getAllCategorias);

export default router;
