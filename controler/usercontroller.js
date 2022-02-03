const express = require('express');
const router =express.Router();
const usermodel=require('../model/usermodel');


exports.ReadOneRequest= async (req, res,) => {
    try {
        let { page, size, sort } = req.query;  
        if (!page) {
         page = 1;
        }
        if (!size) {
      size = 10;
        }
        const limit = parseInt(size);
        const user = await Students.find().sort({ votes: 1, _id: -1 }).limit(limit)
  
        res.send({
            page,
            size,
            Info: user,
        });
    }
    catch (error) {
        res.sendStatus(500);
    }
};
exports.CreatOneRequest=async (req,res)=>{
    try{
        const postStudent=await new Students({
            username:req.body.username,
            password:req.body.password
        });
        const saveStudent=await postStudent.save();
        res.status(200).json(saveStudent);
    }
    catch(err){
        res.json({"error":err});
    }
};

exports.ReadAllRequest = async (req,res) =>{
    try{
        const getAllStudent = await getAllStudent.findAll({})
        res.status(200).json(AllStudents);
    }
    catch(err){
        res.json({"Error" : err});
    }
}
