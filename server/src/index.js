
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {userRouter} from './routes/user.js'
const app=express();

app.use(express.json())
app.use(cors());

app.use("/send",userRouter)
mongoose.connect("mongodb+srv://beherasatyajit716:jigsatya123@comments.vmqh9m7.mongodb.net/?retryWrites=true&w=majority")

app.listen(5001, ()=>{
    console.log("server started");
})