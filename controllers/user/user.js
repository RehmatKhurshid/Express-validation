import { validationResult } from "express-validator";
// import logger from "../../combined";
export const registerUser = (req, res, next) => {
    try {
            const result = validationResult(req);
            console.log(result)
        if (!result.isEmpty()) {
            console.log('heree')
        return res.send(result.errors[0].msg);
        }
        

        console.log(req.body)
        
        return res.send('hello world')
    } catch (error) {
        console.log('error in registerUser :', JSON.stringify(error))
    }
}