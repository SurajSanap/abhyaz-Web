import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
       
    },
    comments:{
        type:String,
        required:true
    },
    exp:{
        type:Number,
        required:true
    },
    feedback:{
        type:String
    }
});
export const userModel=mongoose.model("users",userSchema)