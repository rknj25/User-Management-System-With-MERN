import express from 'express';
import { add, deleteUser, getUser, getUserById, update } from '../controller/userController.js';

const router=express.Router();

router.post('/add',add);
router.get('/get',getUser);
router.get('/get/:id',getUserById);
router.put('/update/:id',update);
router.delete('/delete/:id', deleteUser)

export default router;