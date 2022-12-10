import express from 'express';
import { login } from '../controllers/auth.js'

const router = express.Router();

// localhost:3001/auth/login
router.post('/login', login)

export default router;