import { GETDATAREQUEST,GETDATAFAILURE,GETDATASUCCESS } from "./getdata.actiontype";

const init = {
     isLoading:false,
     products:[],
     isError:false
}
export const getdatareducer = (state=init,action)=>{
        
        switch(action.type) {
    
            case GETDATAREQUEST:
                return{...state,isLoading: true}
    
            case GETDATASUCCESS:
                return {...state,isLoading:false,products: action.payload,isError:false}
                
            case GETDATAFAILURE:
                return {...state,isLoading:false,isError:true}    
    
             default:
                return state;
        }
  
}