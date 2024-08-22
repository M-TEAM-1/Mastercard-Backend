import express from 'express';
import { registerStudent, loginStudent } from '../controllers/student.controller.js';

const router = express.Router();

router.post('/register', registerStudent);
router.post('/login', loginStudent);

// Other student routes

export default router;
