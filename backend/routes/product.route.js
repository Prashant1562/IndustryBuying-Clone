const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();



      // http://localhost:4441/products/filter?des=dse            sorting
      // http://localhost:4441/products/filter?skip=1&limit=1     pagination
      // http://localhost:4441/products/filter?brand=Rico Italy   filter


//get Product



ProductRouter.get("/", async (req, res) => {
  const Product = await ProductModel.find()
  res.send(Product);

});

//create Product



ProductRouter.post("/create", async (req, res) => {
  let data = req.body
  const Product = new ProductModel(data)
  await Product.save()
  res.send({ massege: "New Product has been created", data });

});

//delete Product



ProductRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await ProductModel.findByIdAndDelete({ _id: id })
  res.send({ massege: `Product ${id} has been deleted` });

});


//update Product



ProductRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id
  const data = req.body
  await ProductModel.findByIdAndUpdate({ _id: id }, data)
  res.send({ massege: `Product ${id} has been update.` });

});


ProductRouter.get("/filter", async (req, res) => {

  const query = req.query;
  let products;
  try {
    //You can use pagination by passing query as skip and limit------------------------->
    if (query.limit && query.skip) {
      // If you want to sort data in ascending order according to price , pass "asc" as a query-------------------------------------->

      
      if (query.asc) {
        if (query.brand && query.category) {
          products = await ProductModel.find({ $and: [{ brand: query.brand }, { category: query.category }] }).skip(query.skip).limit(query.limit).sort({ price: 1 });
        }

        else if (query.brand) {
          products = await ProductModel.find({ brand: query.brand }).skip(query.skip).limit(query.limit).sort({ price: 1 });
        }


        else if (query.category) {
          products = await ProductModel.find({ category: query.category }).skip(query.skip).limit(query.limit).sort({ price: 1 });
        }


        else {
          products = await ProductModel.find().skip(query.skip).limit(query.limit).sort({ price: 1 });
        }
        // If you want to sort data in descending order according to price , pass "des" as a query-------------------------------------->
      } else if (query.des) {

        if (query.brand && query.category) {
          products = await ProductModel.find({ $and: [{ brand: query.brand }, { category: query.category }] }).skip(query.skip).limit(query.limit).sort({ price: -1 });
        }

        else if (query.brand) {
          products = await ProductModel.find({ brand: query.brand }).skip(query.skip).limit(query.limit).sort({ price: -1 });
        }
        else if (query.category) {
          products = await ProductModel.find({ category: query.category }).skip(query.skip).limit(query.limit).sort({ price: -1 });
        }
        else {
          products = await ProductModel.find().skip(query.skip).limit(query.limit).sort({ price: -1 });
        }
      } else {
        if (query.brand && query.category) {
          products = await ProductModel.find({ $and: [{ brand: query.brand }, { category: query.category }] }).skip(query.skip).limit(query.limit);
        }

        else if (query.brand) {
          products = await ProductModel.find({ brand: query.brand }).skip(query.skip).limit(query.limit);
        }
        else if (query.category) {
          products = await ProductModel.find({ category: query.category }).skip(query.skip).limit(query.limit);
        }
        else {
          products = await ProductModel.find().skip(query.skip).limit(query.limit);
        }
      }

      //If you are not using pagination no need to pass query as skip and limit---------------------------------->
    } else {
      if (query.asc) {

        if (query.brand && query.category) {
          products = await ProductModel.find({ $and: [{ brand: query.brand }, { category: query.category }] }).sort({ price: 1 });
        }

        else if (query.brand) {
          products = await ProductModel.find({ brand: query.brand }).sort({ price: 1 });
        }
        else if (query.category) {
          products = await ProductModel.find({ category: query.category }).sort({ price: 1 });
        }
        else {
          products = await ProductModel.find().sort({ price: 1 });
        }
      } else if (query.des) {

        if (query.brand && query.category) {
          products = await ProductModel.find({ $and: [{ brand: query.brand }, { category: query.category }] }).sort({ price: -1 });
        }

        else if (query.brand) {
          products = await ProductModel.find({ brand: query.brand }).sort({ price: -1 });
        }
        else if (query.category) {
          products = await ProductModel.find({ category: query.category }).sort({ price: -1 });
        }
        else {
          products = await ProductModel.find().sort({ price: -1 });
        }
      } else {

        if (query.brand && query.category) {
          products = await ProductModel.find({ $and: [{ brand: query.brand }, { category: query.category }] });
        }

        else if (query.brand) {
          products = await ProductModel.find({ brand: query.brand });
        }
        else if (query.category) {
          products = await ProductModel.find({ category: query.category });
        }
        else {
          products = await ProductModel.find();
        }
      }
    }
    res.send(products);
  } catch (err) {
    res.send({ "msg": "cannot get products", "error": err.message })
  }
})


// below code can be used to get all products By using sorting function in user site---------------->
ProductRouter.get("/sort", async (req, res) => {
  let query = req.query;

  try {
    if (query.sort == "asc") {
      const products = await ProductModel.find.sort({ price: 1 });
      res.send(products)
    }
    else if (query.sort == "des") {
      const products = await ProductModel.find.sort({ price: -1 });
      res.send(products)
    }
  } catch (err) {
    res.send({ "msg": "somthing went wrong! cannot sort products", "error": err.message })
  }
})

module.exports = {
  ProductRouter,
};
