const Book = require("../models/userSchemabook")

const Bookupdate=async(req,res)=>{
    const {Name,Description,Author,Year}=req.body;

    

    const _id = req.params.id;
    
    // console.log(userId);
    

    const books=await Book.findByIdAndUpdate(_id,{Name,Description,Author,Year})

    res.JSON("book deleted")
          } 

          module.exports= Bookupdate

    

      





 