import express from "express"
import * as dotenv from 'dotenv';
dotenv.config();

const app = express()

app.get("/",(req,res)=>{
    res.send("The server is connected")
})
app.get("/login",(req,res)=>{
    res.send("The server is connected")
})

app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port:${process.env.PORT}`)
})