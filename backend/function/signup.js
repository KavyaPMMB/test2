const User = require("../models/userSchema")
const bcrypt=require("bcrypt")

const signup=async(req,res)=>{
    const {Name,Email,Password}=req.body;
    const dbmail=await User.findOne({Email})


    if(!Name || !Email || !Password){
        //console.log("All details are  mandatorary");
        res.json("All details are  compulsory");
        throw new Error("All details are  compulsory")
    
    }
    else if(Password.length<=5){
        res.json("Password must have minimum six characters"); 
        throw new Error("All details are  compulsory")
    }

    if (dbmail) {
        res.json("user exist")
       
    }else{
        const salt=await bcrypt.genSalt(10);                                    //SALT..........(10)
        const hashedpassword= await bcrypt.hash(Password,salt)
        
    const userDetails=await User.create({       
        Name,
        Email,
        Password : hashedpassword   
    })
  
    
    res.json({
        
        Name:userDetails.Name,
        Email:userDetails.Email,
        Password:userDetails.Password,
       
    })
       
  
};

}
module.exports=signup;

