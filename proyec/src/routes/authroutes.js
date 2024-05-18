import { Router } from 'express';
import { controladores as usuarios } from '../controllers/authcontroller.js';

const router = Router();

router.get('/usuarios', usuarios.getUsuarios);
router.post('/auth/login', usuarios.authenticateUser);

export default router;

