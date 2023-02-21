const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();






//get Product

ProductRouter.get("/",  async(req, res) => {
  const Product = await ProductModel.find()
  res.send(Product);

});

//create Product



ProductRouter.post("/create", async (req, res) => {
  let data = req.body
  const Product = new ProductModel(data)
  await Product.save()
  res.send({ massege: "New Product has been created" });

});

//delete Product



ProductRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await ProductModel.findByIdAndDelete({_id:id})
  res.send({ massege: `Product ${id} has been deleted` });

});


//update Product



ProductRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id
  const data=req.body
  await ProductModel.findByIdAndUpdate({_id:id},data)
  res.send({ massege: `Product ${id} has been update.` });

});


module.exports = {
  ProductRouter,
};
