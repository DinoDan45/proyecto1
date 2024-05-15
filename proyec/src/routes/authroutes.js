import { Router } from 'express';
import { authController } from '../controllers/authcontroller.js';

const router = Router();

router.post('/login.js', authController.authenticateUser);

export default router;

