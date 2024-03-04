import express from 'express';

import { userModel } from '../models/User.js';

const router=express.Router();

router.post("/feedback",async(req,res)=>{
const{username}=req.body;

const user=await userModel.findOne({ username});
if(user){
    return res.json({message:"User already exists"})
}

const newuser=new userModel(req.body)
await newuser.save()
res.json({message:"User registered Successfully",newuser})

})
export {router as userRouter}