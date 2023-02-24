const express=require("express")
const { connection } = require("./config/db")
const cors=require("cors")
const { UserRouter } = require("./routes/user.route")
const { ProductRouter } = require("./routes/product.route")
const { AdminUserRouter } = require("./routes/Adminuser.route")
const { UsreAuthMiddleware } = require("./middlewares/authentication.middleware")
require("dotenv").config()


const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app=express()

app.use(cors())
app.use(express.json())


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Welcome to Toolers",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:4441"
        }
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const swaggerSpec=swaggerjsdoc(options)
  app.use("/apidocs",swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//get
app.get("/", (req, res) => {
  res.send("Welcome to our Project.");
});

app.use("/users", UserRouter);
app.use("/products" , ProductRouter);
app.use("/admin" , AdminUserRouter );



app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to db",process.env.port)
    } catch (error) {
        console.log(error)
    }
})