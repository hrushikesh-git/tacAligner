const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:35,
    },
    number:{
        type:String,
        required: true
    },
    email: { type:String, required: true,unique: true },
    city:{
        type: String,
        required: true,
        maxlength:40
    },
    address: { type:String,required: true,trim: true },
    role:{
        type:String,
    }
})

module.exports = mongoose.model('User', userSchema)