
import { GETBANUSERFAILURE, GETBANUSERREQUEST,GETBANUSERSUCCESS } from "./getbanuseractiontype"

const init = {
    isLoading:false,
    products:[],
    isError:false
}
export const getbanuserreducer = (state=init,action)=>{
       
       switch(action.type) {
   
           case GETBANUSERREQUEST:
               return{...state,isLoading: true}
   
           case GETBANUSERSUCCESS:
               return {...state,isLoading:false,products: action.payload,isError:false}
               
           case GETBANUSERFAILURE:
               return {...state,isLoading:false,isError:true}    
   
            default:
               return state;
       }
 
}



