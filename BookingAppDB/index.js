import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
dotenv.config

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB.')
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log('monngoDB disconnected')
})

mongoose.connection.on("connected", ()=>{
    console.log('monngoDB connected')
})

app.get("/", (req, res) =>{
    res.send("hello request")
})

app.listen(8800, ()=> {
    connect()
    console.log("Connected to Backend!")
})