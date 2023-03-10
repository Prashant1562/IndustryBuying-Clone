import { BANUSERREQUEST,BANUSERFAILURE,BANUSERSUCCESS } from "./banuseractiontype"


const init = {
    isLoading:false,
    products:[],
    isError:false
}
export const banuserreducer = (state=init,action)=>{
       
       switch(action.type) {
   
           case BANUSERREQUEST:
               return{...state,isLoading: true}
   
           case BANUSERSUCCESS:
               return {...state,isLoading:false,products: action.payload,isError:false}
               
           case BANUSERFAILURE:
               return {...state,isLoading:false,isError:true}    
   
            default:
               return state;
       }
 
}