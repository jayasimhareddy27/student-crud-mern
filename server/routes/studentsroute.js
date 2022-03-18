import express from 'express';
import { getd,create,del} from '../controller/studentcontroller.js';
import Student from '../model/student.js';

const router=express.Router();
router.get('/students',getd);
router.post('/students',create); 
router.delete('/students/:id',del);

export default router;