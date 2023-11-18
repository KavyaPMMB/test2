const Book = require("../models/userSchemabook")

const schemafunctionbook=async(req,res)=>{

    const {Name,Description,Author,Year,Image}=req.body
    
console.log(Name,Description,Author,Year,Image);


const BookDetails = await Book.create({
    Name,
    Description,
    Author,
    Year,
    Image
})

res.json(BookDetails)
 
}


module.exports=schemafunctionbook;