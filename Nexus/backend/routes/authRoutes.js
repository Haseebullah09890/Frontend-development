import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import upload from '../middlewares/uploadMiddleware.js';
import protect from '../middlewares/protectMiddleware.js';

const router = express.Router();

// Signup route with profile picture upload
router.post('/signup', upload.single('profile'), register);

// Login route
router.post('/login', login);

// Protected route to get the logged-in user
router.get('/me', protect, getMe);

export default router;
