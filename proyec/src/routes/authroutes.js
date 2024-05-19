import express from 'express';
import { controladores } from '../controllers/authcontroller.js';

const router = express.Router();

router.get('/usuarios', controladores.getUsuarios);
router.post('/login', controladores.authenticateUser);
router.post('/register', controladores.registerUser);

export default router;

