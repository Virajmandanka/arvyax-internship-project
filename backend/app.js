const express =require("express")
const connection = require("./server")
const Userroute = require("./router/userroute")
const Categoryroute = require("./router/category")
const Subcategoryroute = require("./router/subcategry")
const Productroute = require("./router/product")
const cors = require('cors')
require('dotenv').config();



const app=express()

const PORT = process.env.PORT 
const MONGO_URL = process.env.MONGO_URL;
const adminseckretkey= process.env.adminseckretkey;
 
app.use(express.json())
app.use(cors())
app.use("/user",Userroute)
app.use("/cat",Categoryroute)
app.use("/sub",Subcategoryroute)
app.use("/product",Productroute)


//  app.get("/",(req,res)=>{
//     res.send("hello")
//  })
app.listen(PORT,()=>{
    connection()
    console.log(`server runing port  ${PORT}`)
})