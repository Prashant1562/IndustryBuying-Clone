import { GET_PRODUCT_ERROR, GET_PRODUCT_FILTER_BRANDS, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./Filter.types"

let initialData = { 
    loading:false,
    error:false,
    FData:[]
} 

export const FilterReducer = (state=initialData,{type,payload}) => {
    switch(type){
        case  GET_PRODUCT_LOADING :{
            return{
              ...state,
              loading:true,
              error:'',
              FData:[]
            }
        }

        case GET_PRODUCT_SUCCESS : {
            return{
                ...state,
                loading:false,
                error:false,
                FData:payload
              }
           }

        case GET_PRODUCT_ERROR : {
            return{
                ...state,
                loading:false,
                error:true,
                FData:[]
              }
           }

           case GET_PRODUCT_FILTER_BRANDS : {
            return{
                ...state,
                loading:false,
                error:false,
                FData:payload
              }
           }

      default:{
        return state
      }
    }
}