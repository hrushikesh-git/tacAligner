require("dotenv").config();
const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

router.post('/signup', async (req,res)=>{
    try{
    const {email,username,name,password} = req.body;
    if(!email || !name || !password || !username){
        return res.status(422).json({
            error:"Please add all credentials"
        })
    }
    let admin = await Admin.findOne({email})
    if(admin){
        return res.status(400).json({error:"User Already Exsist"})
    }
    let hashedpassword = await bcrypt.hash(password,10)
    admin = new Admin({
        name,
        username,
        email,
        password:hashedpassword
    })

    await admin.save();
    res.json({message:"Saved Successfully"})

    }
    catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')    
    }
})

router.post('/signin',async(req, res)=>{
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({error:"Fill All Credentials"})
        }

        let admin = await Admin.findOne({ username });
        if(!admin){
            return res.status(404).json({error:"User Not Exsist"})
        }

        let domatch = await bcrypt.compare(password,admin.password)
        if(domatch){
            const token = jwt.sign({_id:admin._id},process.env.JWT_SECRET)
            const {_id,name,username,email,role} = admin
            res.json({token,user:{_id,email,username,name,role}})
        }
        else{
            return res.status(422).json({error:"Invalid Email Or Password"})
        }
    }
    catch (error) {
            console.log(error.message)
        }
})

module.exports = router;