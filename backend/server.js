const express=require("express")
const connectDB = require("../backend/database/db.js")
const router=require("../backend/Router/router")
const cors=require("cors")
const mongoose  = require("mongoose")


const app=express()


mongoose.set('strictQuery', true);

const dotenv = require("dotenv");



connectDB()
dotenv.config();

app.use(express.json())

app.use(cors())


app.use("/",router)


app.get("/",(req,res)=>{
    res.send("API is runnig")
    
})


const PORT=process.env.PORT||5000

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))

