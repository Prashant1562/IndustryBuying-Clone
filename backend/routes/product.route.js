const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();






//get Product


/**
* @swagger
* components:
*   schemas:
*       product:
*           type: object
*           properties:
*               name:
*                   type: string
*                   description: The user name
*               pass:
*                    type: string
*                    description: The user email
*               email:
*                     type: string
*                     description: The user email
*               avatar:
*                     type: string
*                     description: The user avatar
*               age:
*                     type: number
*                     description: The user age
*               number:
*                     type: number
*                     description: The user number
*               gender:
*                     type: string
*                     description: The user gender
*/


/**
 * @swagger
 * /products:
 *  get:
 *      summary: This will get all the user data from the database
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/product"
 *
 */

/**
 * @swagger
 * /products/create:
 *  post:
 *      summary: This is to post a new user to the database.
 *      tags: [Product]
 *
 */


/**
 * @swagger
 * /products/delete/:id:
 *  delete:
 *      summary: This is to post a new user to the database.
 *      tags: [Product]
 *
 */

/**
 * @swagger
 * /products/update/:id:
 *  patch:
 *      summary: This is to post a new user to the database.
 *      tags: [Product]
 *
 */

ProductRouter.get("/",  async(req, res) => {
  const Product = await ProductModel.find()
  res.send(Product);

});

//create Product



ProductRouter.post("/create", async (req, res) => {
  let data = req.body
  const Product = new ProductModel(data)
  await Product.save()
  res.send({ massege: "New Product has been created",data });

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


// ProductRouter.get("/filter",async(req,res)=>{
//   const query= req.query;
//   const userID = req.body.userID;
//   let products;

//   try{
//       //You can use pagination by passing query as skip and limit------------------------->
//   if(query.limit && query.skip){
//       if(query.brand  && query.category && query.type){
//           products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]}).skip(query.skip).limit(query.limit);
//       }
//       else if(query.brand && query.category){
//           products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]}).skip(query.skip).limit(query.limit);
//       }
//       else if(query.type){
//           products = await ProductModel.find({type:query.type}).skip(query.skip).limit(query.limit);
//       }
//       else if(query.brand){
//           products = await ProductModel.find({brand:query.brand}).skip(query.skip).limit(query.limit);
//       }
//       else if(query.category){
//           products = await ProductModel.find({category:query.category}).skip(query.skip).limit(query.limit);
//       }
//       else{
//            products = await ProductModel.find({userID:userID}).skip(query.skip).limit(query.limit);
//       }
//        //If you are not using pagination no need to pass query as skip and limit---------------------------------->
//   }else{
//       if(query.brand  && query.category && query.type){
//           products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category},{type:query.type}]});
//       }
//       else if(query.brand && query.category){
//           products = await ProductModel.find({$and:[{brand:query.brand},{category:query.category}]});
//       }
//       else if(query.type){
//           products = await ProductModel.find({type:query.type});
//       }
//       else if(query.brand){
//           products = await ProductModel.find({brand:query.brand});
//       }
//       else if(query.category){
//           products = await ProductModel.find({category:query.category});
//       }
//       else{
//            products = await ProductModel.find({userID:userID});
//       }
//   } 
      
     
//       res.send(products);
//   }catch(err){
//       res.send({"msg":"cannot get products","error":err.message})
//   }
// })


// // below code can be used to get all products By using sorting function in user site---------------->
// ProductRouter.get("/sort",async(req,res)=>{
//   let query= req.query;
  
//   try{
//       if(query.sort=="asc"){
//        const products = await ProductModel.find.sort({price:1});
//        res.send(products)
//       }
//       else if(query.sort=="des"){
//           const products = await ProductModel.find.sort({price:-1});
//           res.send(products)
//       }   
//   }catch(err){
//       res.send({"msg":"somthing went wrong! cannot sort products","error":err.message})
//   }
// })

module.exports = {
  ProductRouter,
};
