const mongoose = require("mongoose")

const porductSchema = mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    brand: String,
    category: String,
    sub_category: String,
    images: Array
     
},
    {
        versionKey: false
    })

const ProductModel = mongoose.model("product", porductSchema)
module.exports = {
    ProductModel
}

    // "title": "",
    // "price": "",
    // "quantity": "",
    // "brand": "",
    // "category": "",
    // "sub_category": "",
    // "images": []