const Book = require("../models/userSchemabook")

const getbook=async(req,res)=>{

    const _id =req.params.id
  
    
    const displayBookParam= await Book.findById(_id)
    console.log(displayBookParam);
    res.json(displayBookParam);
    }

module.exports=getbook