
import { GETUSERSFAILURE,GETUSERSREQUEST,GETUSERSSUCCESS } from "./getusersactiontype"

const init = {
     isLoading:false,
     products:[],
     isError:false
}
export const getuserreducer = (state=init,action)=>{
        
        switch(action.type) {
    
            case GETUSERSREQUEST:
                return{...state,isLoading: true}
    
            case GETUSERSSUCCESS:
                return {...state,isLoading:false,products: action.payload,isError:false}
                
            case GETUSERSFAILURE:
                return {...state,isLoading:false,isError:true,products:action.payload}    
    
             default:
                return state;
        }
  
}