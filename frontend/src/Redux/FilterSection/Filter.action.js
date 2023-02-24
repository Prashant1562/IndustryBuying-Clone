import { getDataByAPI, getDataByAPIFilter } from "./Filter.API";
import { GET_PRODUCT_ERROR, GET_PRODUCT_FILTER_AVAILABILITY, GET_PRODUCT_FILTER_BRANDS, GET_PRODUCT_FILTER_DISCOUNT, GET_PRODUCT_FILTER_OFFERS, GET_PRODUCT_FILTER_RANGE_PRICE, GET_PRODUCT_FILTER_SORT, GET_PRODUCT_LOADING  } from "./MainProduct.types"



export const GetDataByBrands = (str) => async(dispatch)=>{
   console.log(str)
   dispatch({type:GET_PRODUCT_LOADING});
   try{
      let [data,data1] = await getDataByAPIFilter(str);
      dispatch({type:GET_PRODUCT_FILTER_BRANDS,payload:data,payload1:data1})
   }
   catch(err){
      dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
   }
}

export const GetDataByPriceRange = (str) => async(dispatch)=>{
     dispatch({type:GET_PRODUCT_LOADING});
     try{
        let data = await getDataByAPI(str);
        dispatch({type:GET_PRODUCT_FILTER_RANGE_PRICE,payload:data})
     }
     catch(err){
        dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
     }
}



export const GetDataByDiscount = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getDataByAPI(str);
       dispatch({type:GET_PRODUCT_FILTER_DISCOUNT,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}


export const GetDataByOffers = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getDataByAPI(str);
       dispatch({type:GET_PRODUCT_FILTER_OFFERS,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}

export const GetDataByAvailability = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getDataByAPI(str);
       dispatch({type:GET_PRODUCT_FILTER_AVAILABILITY,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}

export const GetDataBySort = (str) => async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING});
    try{
       let data = await getDataByAPI(str);
       dispatch({type:GET_PRODUCT_FILTER_SORT,payload:data})
    }
    catch(err){
       dispatch({type:GET_PRODUCT_ERROR,payload:err.message});
    }
}