import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true
    },
    age:
    {
        type : Number
    },
    birthDate:
    {
        type : string
    },
    password:
    {
        type : string
    },
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

export default User



// import mongoose from "mongoose";


// const userSchema = new mongoose.Schema({
//    user :{
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         require: true,
//         unique: true
//     },
//     mobile: {
//         type: Number,
//         require: true
//     },
//     age:
//     {
//         type : Number
//     },
//     birthDate:
//     {
//         type : string
//     },
// }
// }, { timestamps: true })




// const User = mongoose.model('User', userSchema);


// export default User
