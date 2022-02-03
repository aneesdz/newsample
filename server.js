const express = require('express');
const mongoose =require('mongoose');


// const nodemailer=require('nodemailer');
require("dotenv/config");


var app =express();
app.use(express.json());

 
// const studentRouter= require('./router/studentRouter');
// app.use('/student',studentRouter)


   
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`);
})
mongoose.connect(process.env.MON_ERV,(err)=>{
    if(err)console.log('DB not connected');
    else
    console.log('DB is connected');
});

