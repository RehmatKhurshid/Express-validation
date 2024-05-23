import { body } from "express-validator";

export const registerValidator = [
    body('email', 'invalid does not empty').not().notEmpty(),
    body('email', 'invalid email').isEmail().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    body('mobile', 'The min password length is 3 characters').isLength({min : 3})
]

export const createValidator =[
    body('firstName', 'username does not Empty').not().isEmpty(),
    // body('user.firstName', 'username does not Empty').not().isEmpty(),
    //body('user.email', 'Invalid email').isEmail(),
    // body('user.age', 'username must be Alphanumeric').isAlphanumeric(),
    body('birthDate', 'Invalid birthDate').isISO8601(), //YYYY-MM-DDTHH:MM:SS
    body('password', 'password does not Empty').not().isEmpty(),
    body('password', 'The minimum password length is 4 characters').isLength({min: 4}),
]

export const loginUserValidator = [
    body('email', 'invalid, email cannot be empty').not().notEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid creds').not().isEmpty().isLength({min : 5}),
]