import { validationResult } from "express-validator";
import { logger } from "../../utils/logger/logger.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../../models/user/user.js";

// export const registerUser = (req, res,next) => {
    // try {
    //         const result = validationResult(req);
    //         console.log(result)
    //     if (!result.isEmpty()) {
    //         console.log('heree')
    //     return res.send(result.errors[0].msg);
    //     }   
    //     console.log(req.body)
        
    //     return res.send('hello world')
        
    // } catch (error) {
    //     console.log('error in registerUser :', JSON.stringify(error))
    // }
  
export const registerUser = async (req, res) => {
    try {

        const { firstName, lastName, email, password } = req.body;
        console.log(firstName, lastName, email, password);
        //generate salt
        const salt = await bcrypt.genSalt(10);

        console.log(salt)
        const result = validationResult(req);
                console.log(result)
            if (!result.isEmpty()) {
                console.log('heree')
            return res.send(result.errors[0].msg);
            }   
            console.log(req.body)


        //hash password
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })
        await user.save();

        res.status(201).json({ message: "signUp successful" })
    } catch (error) {
            console.log('error in registerUser :', JSON.stringify(error))
        }
}


export const loginUser= async (req, res, next) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send(422).json({ "error": result.errors[0].msg });
        }
        const { email, password } = req.body;

        //find email

        const isUser = await User.findOne({ email: email });

        if (!isUser) {
            return res.status(200).json({ "message": "invalid creds" })
        }

        //campare password

        const isPasswordMacthing = await bcrypt.compare(password, isUser.password);

        if (!isPasswordMacthing) {
            return res.status(200).json({ "message": "invalid creds" })
        }

        //create token
        const token = jwt.sign({ _id: isUser._id }, 'my_secret', { expiresIn: '1h' });

        //send response

        res.status(201).json({
            id: isUser._id,
            email: isUser.email,
            firstName: isUser.firstName,
            lastName: isUser.lastName,
            mobile: isUser.mobile,
            token
        })


    } catch (error) {
        logger.error(`error in registerUser ${JSON.stringify(error)} `);
        console.log('inside login')
        res.status(500).json({ "message": "something went wrong" })
    }
}