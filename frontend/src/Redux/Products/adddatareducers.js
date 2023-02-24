
import { ADDDATAREQUEST,ADDDATAFAILURE,ADDDATASUCCESS } from "./adddata.actiontype";

const init = {
     isLoading:false,
     products:[],
     isError:false
}
export const adddatareducer = (state=init,action)=>{
        
        switch(action.type) {
    
            case ADDDATAREQUEST:
                return{...state,isLoading: true}
    
            case ADDDATASUCCESS:
                return {...state,isLoading:false,products: action.payload,isError:false}
                
            case ADDDATAFAILURE:
                return {...state,isLoading:false,isError:true}    
    
             default:
                return state;
        }
  
}