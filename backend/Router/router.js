const login = require("../function/login")
const signup = require("../function/signup")
const express=require("express")
const protect=require("../Middleware/Token")
const schemafunction = require("../function/adddata")
const home=require("../function/home")
// const sample = require("../function/sample")
const schemafunctionbook = require("../function/Addbook")
const getbook = require("../function/getbook")
const editbook=require("../function/editbook")
const deletebook=require("../function/deletebook")
const getallbooks = require("../function/getallbooks")
const Bookupdate = require("../function/editbook")




const router=express.Router()
const middleware=[protect]

router.route('/').post(schemafunction)    //add user details to database

router.route('/book').post(schemafunctionbook)   //add books to database

router.route('/items/:id').get(getbook)   //get books using id

router.route('/items').get(getallbooks)  //gat all books details from database

router.route('/updatebook/:id').put(Bookupdate)   //update book

router.route('/deletebook/:id').delete(deletebook)  //delete book

router.route("/login").post(login)    //user login

router.route('/signup').post(signup)   //user signup

router.route("/home").get(middleware,home)

// router.route("/sample").get(sample)



module.exports=router;


//lazeenavp123