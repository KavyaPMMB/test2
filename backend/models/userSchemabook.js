const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Name:{type:String},
    Description:{type:String},
    Author:{type:String},
    Year:{type:String},
    Image:{type:String}
})

const Book=mongoose.model("Book",userSchema)

module.exports=Book