const mongoose=require("mongoose")     //install mongoose using "npm i mongoose"

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://lazeenavp:lazee12345@cluster0.sx9ihzr.mongodb.net/?retryWrites=true&w=majority",{
           useUnifiedTopology:true, 
            useNewUrlParser: true 
        })

        console.log("Database connected");
    } catch(error){
        console.log(`Error:${error}`);
        process.exit();
    }
}
 
module.exports=connectDB;