const express=require("express")
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { userValidator } = require("./middlewares/userValidate.middleware");
const { adminRouter } = require("./routes/Adminuser.route");
const { adminValidator } = require("./middlewares/adminValidate.middleware");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { productsRouter } = require("./routes/product.route");
//const {productValidator} = require("./middleware/product.middleware")
require("dotenv").config()

const app=express()

app.use(express.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to Toolers.com")
})

app.use(userValidator)
app.use("/", userRouter)

app.use(adminValidator)
app.use("/admin" , adminRouter)

app.use(authenticate) 
app.use("/products", productsRouter)

app.listen((process.env.port), async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log("Not connected to DB")
        console.log(err.message)
    }
    console.log(`Server is running in port ${process.env.port} `)
})