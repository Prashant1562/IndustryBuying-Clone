import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./MainProduct.types"

let initialData = { 
    loading:false,
    error:false,
    min:1,
    max:4000,
    Data:[]
} 

export const ProductReducer = ( state=initialData, { type, payload, min,max } ) => {
    switch(type){
        case  GET_PRODUCT_LOADING :{
            return{
              ...state,
              loading:true,
              error:false,
              Data:[]
            }
        }

        case GET_PRODUCT_SUCCESS : {
          // console.log(min,max,payload)
            return{
                ...state,
                loading:false,
                error:false,
                min:min,
                max:max,
                Data:payload
              }
           }

        case GET_PRODUCT_ERROR : {
            return{
                ...state,
                loading:false,
                error:true,
                Data:[]
              }
           }

      default:{
        return state
      }
    }
}