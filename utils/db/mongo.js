import mongoose from 'mongoose';


/**
* connectDB is a function which connects mongoose
*/
export const connectDB = async () => {


    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/validation');
        //success log
        console.log('mongoose connected successfully....');
    } catch (error) {
        console.log(error)
    }

}


