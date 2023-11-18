const Book = require("../models/userSchemabook")

const getallbooks=async(req,res)=>{

    const getbook=await Book.find() 
   
    res.json(getbook)
}

module.exports=getallbooks