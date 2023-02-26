const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();

ProductRouter.get("/price/filter", async (req,res)=>{
     const query= req.query;
     let val1 = query.price[0];
     let val2 = query.price[1];
     console.log(val1,val2,"hello")
    try{
        if(val1>val2){
          let data = await ProductModel.find({$and:[{price:{$gte:val2}},{price:{$lte:val1}}]});
          res.send(data);
        }
        else{
          let data = await ProductModel.find({$and:[{price:{$gte:val1}},{price:{$lte:val2}}]});
          res.send(data);
        }
          
    }
    catch(err){
      res.send({"msg":"Something went wrong","Error":err});
    }
})


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

ProductRouter.get("/getbyID/:id", async (req,res)=>{
  let {id} = req.params
  console.log(id)
  try{
    let data = await ProductModel.findOne({_id:id});
    // let data = await ProductModel.find();
    // console.log(data,"Hello this is data");
    res.send(data)
  }
  catch(err){
    res.send({"msg":"Something went wrong!","Error":err})
  }
})


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

        else if (query.price) {
          products = await ProductModel.find().sort({ price: 1 });
        }

        else if (query.discount) {
          products = await ProductModel.find().sort({ discount : 1 });
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
        else if (query.price) {
          products = await ProductModel.find().sort({ price: -1 });
        }
        else if (query.discount) {
          products = await ProductModel.find().sort({ discount : -1 });
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
