const express=require("express")
<<<<<<< HEAD
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { userValidator } = require("./middlewares/userValidate.middleware");
const { adminRouter } = require("./routes/Adminuser.route");
const { adminValidator } = require("./middlewares/adminValidate.middleware");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { productsRouter } = require("./routes/product.route");
//const {productValidator} = require("./middleware/product.middleware")
=======
const { connection } = require("./config/db")
const cors=require("cors")
const { UserRouter } = require("./routes/user.route")
const { ProductRouter } = require("./routes/product.route")
const { AdminUserRouter } = require("./routes/Adminuser.route")
const { UsreAuthMiddleware } = require("./middlewares/authentication.middleware")
const { BlockRouter } = require("./routes/Block.route")
>>>>>>> 8b75040b08e4a3566ea608142bfaea5bce757236
require("dotenv").config()

const app=express()

app.use(express.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to Toolers.com")
})

<<<<<<< HEAD
app.use(userValidator)
app.use("/", userRouter)
=======
app.use("/users", UserRouter);
app.use("/products" , ProductRouter);
app.use("/admin" , AdminUserRouter );
app.use("/block" , BlockRouter );
>>>>>>> 8b75040b08e4a3566ea608142bfaea5bce757236

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