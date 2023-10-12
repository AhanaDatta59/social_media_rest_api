import express from 'express';
import { getAllUser } from '../controllers/user-controller.js';
import { signup } from '../controllers/user-controller.js';

const router = express.Router();
router.get("/",getAllUser);
router.post("/signup",signup);

export default router;