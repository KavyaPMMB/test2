
const Book = require("../models/userSchemabook")

const bookdelete=async(req,res)=>{
    
const _id = req.params.id

// var myId = JSON.parse(req.body.id);
  

const books=await Book.findByIdAndRemove(_id)
res.json("Book Deleted")
}
    



module.exports= bookdelete