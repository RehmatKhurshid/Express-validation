import express from 'express'
import { registerUser } from '../../controllers/user/user.js';
import {query, body, validationResult} from "express-validator"
import { createValidator, registerValidator } from '../../middleware/user/user.js';

const router = express.Router()

router.post('/register',registerValidator, createValidator, registerUser)
// router.post('/register', createValidator, registerUser)



export default router


