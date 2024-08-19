import express from 'express';
import adminRouter from './admin.js';
import govtSchemeRouter from './govt.scheme.js';
import instituteRouter from './institute.js';
import studentRouter from './student.js';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/govtScheme', govtSchemeRouter); 
router.use('/institute', instituteRouter); 
router.use('/student', studentRouter); 

export default router;
