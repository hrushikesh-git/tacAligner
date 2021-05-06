require('dotenv').config()
const express = require('express');
const app =express();
const mongoose = require('mongoose');
const connectDB = require('./db')


connectDB();




app.use(express.json({extended: false}));

// get routers
const adminRoutes = require('./routes/admin');

// Routes
app.use('/api/admin',adminRoutes);


app.get("/",(req, res)=>{
    res.send("API Created")
})

port = process.env.PORT

app.listen(port,()=>{
    console.log(`server at port ${port}`);
})