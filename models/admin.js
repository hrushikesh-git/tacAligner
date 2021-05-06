const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:35,
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password: { type:String,required: true },
    email: { type:String, required: true,unique: true },
    role:{
        type:String,
    }
})

module.exports = mongoose.model('Admin', adminSchema)