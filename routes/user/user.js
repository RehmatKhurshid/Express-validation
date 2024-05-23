import express from 'express'
import { loginUser, registerUser } from '../../controllers/user/user.js';
// import {query, body, validationResult} from "express-validator"
import { createValidator, loginUserValidator, registerValidator } from '../../middleware/user/user.js';

const router = express.Router()

router.post('/register',registerValidator, createValidator, registerUser)
// router.post('/register', createValidator, registerUser)
router.post('/login', loginUserValidator,loginUser );




export default router


