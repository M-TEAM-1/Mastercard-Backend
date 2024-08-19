import express from 'express';
import adminController from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/newScheme', adminController.post_newScheme);

export default router;