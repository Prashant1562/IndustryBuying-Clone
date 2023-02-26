const express=require("express")
const { ProductModel } = require("../model/Product.model")
const productsRouter=express.Router()

productsRouter.get("/",async(req,res)=>{
 
    const sortby=req.query.sortby;
    const order=req.query.order;
    const page=+(req.query.page);
    const limit=+(req.query.limit) ;
    const search=req.query.search;
    const filterby=req.query.filterby;
    const lt=+(req.query.lt);
    const gt=+(req.query.gt);
    const value=req.query.value
    
    console.log(req.query)
    
    if(search && page && sortby && order){
       
        try{
            if(sortby=="title"){
                if(order=="asc"){
                    if(limit){
                        const products=await ProductModel.find({
    
                            "$or":[
                                {"title":{$regex:search,$options:"i"}},
                                {"brand":{$regex:search,$options:"i"}},
                                {"category":{$regex:search,$options:"i"}},
                                
                               
                                
                            ]
                        }).skip((page -1)*limit).limit(limit).sort({"title":1})
                        console.log(products)
                        res.send(products)
                    }
                    else {
    
                        const products=await ProductModel.find({
    
                            "$or":[
                                {"title":{$regex:search,$options:"i"}},
                                {"brand":{$regex:search,$options:"i"}},
                                {"category":{$regex:search,$options:"i"}},
                               
                               
                                
                            ]
                        }).skip((page -1)*limit).limit(12).sort({"title":1})
                        console.log(products)
                        res.send(products)
                    }
                    
           
                }
    
            else if(order=="desc"){
                if(limit){
                    const products=await ProductModel.find({
    
                        "$or":[
                            {"title":{$regex:search,$options:"i"}},
                            {"brand":{$regex:search,$options:"i"}},
                            {"category":{$regex:search,$options:"i"}},
                           
                            
                        ]
                    }).skip((page -1)*limit).limit(limit).sort({"title":-1})
                    console.log(products)
                    res.send(products)
                }
                else {
                    const products=await ProductModel.find({
    
                        "$or":[
                            {"title":{$regex:search,$options:"i"}},
                            {"brand":{$regex:search,$options:"i"}},
                            {"category":{$regex:search,$options:"i"}},
                           
                            
                        ]
                    }).skip((page -1)*limit).limit(12).sort({"title":-1})
                    console.log(products)
                    res.send(products)
                }
              
            }

<<<<<<< HEAD
            }
=======
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
>>>>>>> 8b75040b08e4a3566ea608142bfaea5bce757236

            else if(sortby=="price"){
                
                if(order=="asc"){
                  
                    if(limit){
                        const products=await ProductModel.find({
    
                            "$or":[
                                {"title":{$regex:search,$options:"i"}},
                                {"brand":{$regex:search,$options:"i"}},
                                {"category":{$regex:search,$options:"i"}},
                                
                               
                                
                            ]
                        }).skip((page -1)*limit).limit(limit).sort({"price":1})
                        console.log(products)
                        res.send(products)
                    }
                    else {
    
                        const products=await ProductModel.find({
    
                            "$or":[
                                {"title":{$regex:search,$options:"i"}},
                                {"brand":{$regex:search,$options:"i"}},
                                {"category":{$regex:search,$options:"i"}},
                               
                                
                            ]
                        }).skip((page -1)*limit).limit(12).sort({"price":1})
                        console.log(products)
                        res.send(products)
                    }
                    
           
                }
    
            else if(order=="desc"){
                if(limit){
                    const products=await ProductModel.find({
    
                        "$or":[
                            {"title":{$regex:search,$options:"i"}},
                            {"brand":{$regex:search,$options:"i"}},
                            {"category":{$regex:search,$options:"i"}},
                           
                            
                        ]
                    }).skip((page -1)*limit).limit(limit).sort({"price":-1})
                    console.log(products)
                    res.send(products)
                }
                else {
                    const products=await ProductModel.find({
    
                        "$or":[
                            {"title":{$regex:search,$options:"i"}},
                            {"brand":{$regex:search,$options:"i"}},
                            {"category":{$regex:search,$options:"i"}},
                           
                            
                        ]
                    }).skip((page -1)*limit).limit(12).sort({"price":-1})
                    console.log(products)
                    res.send(products)
                }
              
            }

            }
            
        
        
        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
        
    }
  
    else if(search && page){
       
        if(limit){
            try{
                const products=await ProductModel.find({

                    "$or":[
                        {"title":{$regex:search,$options:"i"}},
                        {"brand":{$regex:search,$options:"i"}},
                        {"category":{$regex:search,$options:"i"}},
                        
                       
                        
                    ]
                }).skip((page -1)*limit).limit(limit)
                console.log(products)
                res.send(products)
            }
            catch(err){
                console.log(err)
                res.send({"message":"Something went wrong"})
            }
            
          
        }
        else{
            try{
                const products=await ProductModel.find({

<<<<<<< HEAD
                    "$or":[
                        {"title":{$regex:search,$options:"i"}},
                        {"brand":{$regex:search,$options:"i"}},
                        {"category":{$regex:search,$options:"i"}},
                        
                        
                    ]
                }).skip((page -1)*limit).limit(12)
                console.log(products)
                res.send(products)
            }
            catch(err){
                console.log(err)
                res.send({"message":"Something went wrong"})
            } 
        }
    }
=======
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
>>>>>>> 8b75040b08e4a3566ea608142bfaea5bce757236

    else if(sortby=="title" && page && order){
      
        if(order =="asc"){
           

                if(limit){
                    try{
                        const products=await ProductModel.find().skip((page -1)*limit).limit(limit).sort({"title":1})
                        console.log(products)
                        res.send(products)
                    }
                    catch(err){
                        console.log(err)
                        res.send({"message":"Something went wrong"})
                    }
                    
                  
                }

                else{
                    try{
                        const products=await ProductModel.find().skip((page -1)*limit).limit(12).sort({"title":1})
                        console.log(products)
                        res.send(products)
                    }
                    catch(err){
                        console.log(err)
                        res.send({"message":"Something went wrong"})
                    } 
                } 
             
            
        }
        else if(order =="desc"){
           

            if(limit){
                try{
                    const products=await ProductModel.find().skip((page -1)*limit).limit(limit).sort({"title":-1})
                    console.log(products)
                    res.send(products)
                }
                catch(err){
                    console.log(err)
                    res.send({"message":"Something went wrong"})
                }
                
              
            }

<<<<<<< HEAD
            else{
                try{
                    const products=await ProductModel.find().skip((page -1)*limit).limit(12).sort({"title":-1})
                    console.log(products)
                    res.send(products)
                }
                catch(err){
                    console.log(err)
                    res.send({"message":"Something went wrong"})
                } 
            } 
         
        
         }

=======
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
>>>>>>> 8b75040b08e4a3566ea608142bfaea5bce757236
    }


    else if(sortby=="price" && page && order){
        
       
        if(order =="asc"){
           

                if(limit){
                    try{
                        const products=await ProductModel.find().sort({"price":1}).skip((page -1)*limit).limit(limit)
                        // console.log(products)
                        res.send(products)
                    }
                    catch(err){
                        console.log(err)
                        res.send({"message":"Something went wrong"})
                    }
                    
                  
                }

                else{
                    try{
                        const products=await ProductModel.find().sort({"price":1}).skip((page -1)*limit).limit(12)
                        console.log(products)
                        res.send(products)
                    }
                    catch(err){
                        console.log(err)
                        res.send({"message":"Something went wrong"})
                    } 
                } 
             
            
        }
        else if(order =="desc"){
           

            if(limit){
                try{
                    const products=await ProductModel.find().sort({"price":-1}).skip((page -1)*limit).limit(limit)
                    console.log(products)
                    res.send(products)
                }
                catch(err){
                    console.log(err)
                    res.send({"message":"Something went wrong"})
                }
                
              
            }

            else{
                try{
                    const products=await ProductModel.find().sort({"price":-1}).skip((page -1)*limit).limit(12)
                    console.log(products)
                    res.send(products)
                }
                catch(err){
                    console.log(err)
                    res.send({"message":"Something went wrong"})
                } 
            } 
         
        
         }

    }

    

    else if(sortby=="title" && order){
        
        try{
            if(order=="asc"){
            const products=await ProductModel.find().sort({"title":1})
            res.send(products)
            }
            else if(order=="desc"){
                const products=await ProductModel.find().sort({"title":-1})
                res.send(products)
            }
           
        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }


    else if(sortby=="price" && order){
        
        try{
            if(order=="asc"){
            const products=await ProductModel.find().sort({"price":1})
            res.send(products)
            }
            else if(order=="desc"){
                const products=await ProductModel.find().sort({"price":-1})
                res.send(products)
            }
           
        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }


    else if(search){
        
        try{
        
        const products=await ProductModel.find({

            "$or":[
                {"title":{$regex:search,$options:"i"}},
                {"brand":{$regex:search,$options:"i"}},
                {"category":{$regex:search,$options:"i"}},
                
                
            ]
        })
        console.log(products)
        res.send(products)
        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }

    else if(page){
       
        try{
           if(limit){
            const products=await ProductModel.find().skip((page -1)*limit).limit(limit)
            res.send(products)
           }
           else{
            const products=await ProductModel.find().skip((page -1)*1).limit(12)
            res.send(products)
           }
           
        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }

    else if(filterby=="price"){
        
        try{
            if(lt){
                const products=await ProductModel.find({price:{$lte:lt}})
                res.send(products)
            }
            else if(gt){
                const products=await ProductModel.find({price:{$gte:gt}})
                res.send(products)
            }
    
           
        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }
    else if(filterby=="brand" && value){
        
        try{
            
                const products=await ProductModel.find({"brand":value})
                res.send(products)

        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }
    else if(filterby=="category" && value){
       
        try{
            
                const products=await ProductModel.find({"category":value})
                res.send(products)

        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }
    else if(filterby=="sub_category" && value){
        
        try{
            
                const products=await ProductModel.find({"sub_category":value})
                res.send(products)

        }
        catch(err){
            console.log(err)
            res.send({"message":"Something went wrong"})
        }
    }
    else{
       
        try{
        
            const products=await ProductModel.find()
            res.send(products)
        }
        catch(err){
            console.log(err.message)
            res.send({"message":"Something went wrong"})
        }
    }
   
   
  
})


productsRouter.post("/post",async(req,res)=>{
    const payload=req.body
    try{
        const new_product=new ProductModel(payload)
        await new_product.save()
        res.send({"message":"Added the product",new_product})

    }catch(err){
        console.log(err.message)
        res.send({"message":"Something went wrong"})
    }
    
})


productsRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
  
    try{
       
       const product=await ProductModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"message":"Updated the product",product})
        
    }catch(err){
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
   
})



productsRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
   
   
    try{
        await ProductModel.findByIdAndDelete({_id:ID})
        res.send({"message":"Deleted the product"})

    }catch(err){
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
    
   
})


// cart

productsRouter.get("/cart",async(req,res)=>{
    console.log(req, "am")
    try {
        const product=await ProductModel.find({"quantity":{$gt:0}})
        console.log(product)
        res.send(product)
    
    } 
    catch (err) {
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
})


// USER PRODUCT ROUTE FOR QUANTITY


productsRouter.get("/:id", async(req,res) => {
    
    console.log("am")
    try {
        const productID = req.params.id
        const products = await ProductModel.findById({_id:productID})
        res.send(products)
    } 
    
    catch (err) {
        console.log(err)
            res.send({"message":"Something Went Wrong, Try After Sometime"})
    }
})


productsRouter.patch("/quantity/:id",async(req,res)=>{
    const ID=req.params.id
    const { quantity}=req.body
    // const quan=req.body.quantity

    
  console.log(quantity,ID)
  
    try{
       
       const product=await ProductModel.findByIdAndUpdate({_id:ID},{quantity})
        res.send({"message":"Updated the quantity",product})
        
    }catch(err){
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
   
})




module.exports={productsRouter}



