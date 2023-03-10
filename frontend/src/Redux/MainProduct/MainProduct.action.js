import { getDataByAPI } from "./MainProduct.API";
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./MainProduct.types"


const MinAndMax = (Array=[]) => {
  // console.log(Array.length,"this is array")
   let min = Infinity;
   let max = -Infinity;
   for (let i = 0; i < Array.length; i++) {
     if (Array[i].price < min) {
       min = Array[i].price;
     }
     if (Array[i].price > max) {
       max = Array[i].price;
     }
   }
   if(min===Infinity&&max===-Infinity)
   {
     return [200,3000]
   }
   else{
     return [min, max];
   }
  
 };
 
const BrandNames = (Array=[]) => {
   let obj = {};
   for (let i = 0; i < Array.length; i++) {
     if (obj[Array[i].brand] === undefined) {
       obj[Array[i].brand] = 1;
     } else {
       obj[Array[i].brand]++;
     }
   }
   let array = [];
   for (let key in obj) {
     array.push([key, obj[key]]);
   }
   return array;
 };


export const GetProductData = (id) => async(dispatch)=>{
   dispatch({type:GET_PRODUCT_LOADING});
   try{
     let data
    if(id){
     data = await getDataByAPI(id);
     dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
    }
    else{
      data = await getDataByAPI();
      // console.log(data.data,"Mainproduct data")
      let [min,max] = MinAndMax(data.data);
      let data1 = BrandNames(data.data);
      // console.log(min,max,data1)
      dispatch({type:GET_PRODUCT_SUCCESS,payload:data1,min:min,max:max});
    }
   }
   catch(err){
      dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
   }
}

