import express from 'express'
import { login, register, getMe, logout } from '../controllers/auth.controllers.js';
import authMiddlewares  from '../middlewares/auth.middlewares.js'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddlewares, getMe);
router.post('/logout', logout);

export default router;
