const User = require("../models/userSchema.js")

const schemafunction=async(req,res)=>{

    const {Name,Email,Password}=req.body
    

    const userDetails=await User.create({        //create querry for adding the datas to the database using post request
        Name,
        Email,
        Password    
    })
    
    res.json(userDetails)
}


module.exports=schemafunction;