import { getByBrand,getByPrice,getByPrice_Discount,getByRangePrice,getData } from "./Filter.API"
import { GET_PRODUCT_ERROR, GET_PRODUCT_FILTER_AVAILABILITY, GET_PRODUCT_FILTER_BRANDS, GET_PRODUCT_FILTER_DISCOUNT, GET_PRODUCT_FILTER_OFFERS, GET_PRODUCT_FILTER_RANGE_PRICE, GET_PRODUCT_FILTER_SORT, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS_FILTER } from "./Filter.types";




export const GetDataFilter = () => async(dispatch)=>{
   dispatch({type:GET_PRODUCT_LOADING});
   try{
      let data = await getData()
      dispatch({type:GET_PRODUCT_SUCCESS_FILTER,payload:data.data})
   }
   catch(err){
      dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
   }
}
let val = "";
export const GetDataByBrands = (str) => async(dispatch)=>{
   // console.log(str)
   val = val + `brand=${str}&`
   dispatch({type:GET_PRODUCT_LOADING});
   try{
      let data = await getByBrand(val)
      console.log(data)
      dispatch({type:GET_PRODUCT_FILTER_BRANDS,payload:data.data})
   }
   catch(err){
      dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
   }
}

export const GetDataByPriceRange = (str,str1) => async(dispatch)=>{
   // console.log(str,str1,"Price")
     dispatch({type:GET_PRODUCT_LOADING});
     try{
        let data = await getByRangePrice(str,str1);
        console.log(data.data,"helskdjflksjdlfkj")
        dispatch({type:GET_PRODUCT_FILTER_RANGE_PRICE,payload:data.data})
     }
     catch(err){
        dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
     }
}



export const GetDataByDiscount = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getByBrand(str);
       dispatch({type:GET_PRODUCT_FILTER_DISCOUNT,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}


export const GetDataByOffers = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getByBrand(str);
       dispatch({type:GET_PRODUCT_FILTER_OFFERS,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}

export const GetDataByAvailability = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getByBrand(str);
       dispatch({type:GET_PRODUCT_FILTER_AVAILABILITY,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}

export const GetDataBySort = (str) => async(dispatch)=>{
   // console.log(str,"Helloe")
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getByPrice_Discount(str);
      //  console.log(data.data);
       dispatch({type:GET_PRODUCT_FILTER_SORT,payload:data.data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}