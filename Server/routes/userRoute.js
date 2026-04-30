import express from 'express';
import { add, deleteUser, getUser, getUserById, update } from '../controller/userController.js';

const router=express.Router();

router.post('/add',add);
router.get('/user',getUser);
router.get('/user/:id',getUserById);
router.put('/update/user/:id',update);
router.delete('/delete/user/:id', deleteUser)

export default router;