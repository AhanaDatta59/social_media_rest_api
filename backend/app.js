import express from "express";
import mongoose from 'mongoose';
const app = express();

//console.log("Ahana")
mongoose.connect('mongodb+srv://demouser:demouser123@cluster0.rso3z76.mongodb.net/?retryWrites=true&w=majority'
).then(()=>app.listen(5000)).then(()=>console.log("Connected to DB at 5000")).catch((err)=>console.log(err));
//defining port
//app.listen(5000);