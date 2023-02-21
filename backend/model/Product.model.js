const mongoose = require("mongoose")

const porductSchema = mongoose.Schema({
    name:String,
    title:String,
    user:String,
},
{
    versionKey:false
})

const ProductModel=mongoose.model("product",porductSchema)
module.exports={
    ProductModel
}