const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();

ProductRouter.get("/price/filter", async (req,res)=>{
     const query= req.query;
    //  console.log("Query:",query)
     let val1 = query.price[0] || 200
     let val2 = query.price[1] || 1000
    //  console.log(val1,val2,"hello")
    try{
        if(val1>val2){
          let data = await ProductModel.find({$and:[{price:{$gte:val2}},{price:{$lte:val1}}]});
          res.send(data);

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

            }

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



