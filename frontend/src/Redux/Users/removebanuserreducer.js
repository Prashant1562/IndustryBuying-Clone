import { REMOVEBANFAILURE,REMOVEBANREQUEST,REMOVEBANSUCCESS } from "./removebanuseractiontype"



const init = {
    isLoading:false,
    products:[],
    isError:false
}
export const removebanreducer = (state=init,action)=>{
       
       switch(action.type) {
   
           case REMOVEBANREQUEST:
               return{...state,isLoading: true}
   
           case REMOVEBANSUCCESS:
               return {...state,isLoading:false,products: action.payload,isError:false}
               
           case REMOVEBANFAILURE:
               return {...state,isLoading:false,isError:true,products:action.payload}    
   
            default:
               return state;
       }
 
}