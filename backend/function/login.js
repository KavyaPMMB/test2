const User = require("../models/userSchema")
const jwt =require("jsonwebtoken")
const bcrypt=require("bcrypt")


const login=async(req,res)=>{
    const {Email,Password}=req.body;
    const dbemail=await User.findOne({Email:Email})
    
   
        if(Email && (await bcrypt.compare(Password,dbemail.Password))){
        console.log("Login Success..");
        
        res.json({Token:generateToken(dbemail.id), message:"Login success"})
       
        
    }else{
        res.json("failed")
    }
   

}

const generateToken=(id)=>{
    return jwt.sign({id},"lazeena123",{
        expiresIn:'1d',

    })
}
  




module.exports=login;

