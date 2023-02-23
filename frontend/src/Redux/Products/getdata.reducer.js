import { GETDATAREQUEST,GETDATAFAILURE,GETDATASUCCESS } from "./getdata.actiontype";

const init = {
     isLoading:false,
     products:[],
     isError:false
}
export const getdatareducer = (state=init,{type,payload})=>{

        switch(type) {
    
            case GETDATAREQUEST:
                return{...state,isLoading: true}
    
            case GETDATASUCCESS:
                return {...state,isLoading:false,products: payload}
                
            case GETDATAFAILURE:
                return {...state,isLoading:false,isError:true}    
    
             default:
                return state;
        }
  
}