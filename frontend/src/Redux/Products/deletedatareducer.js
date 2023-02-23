import { DELETEDATAFAILURE,DELETEDATAREQUEST,DELETEDATASUCCESS } from "./deletedata.actiontype";

const init = {
    isLoading:false,
    isError:false,
    data:[]
}

export const deletedatareducer = (state=init,{type,payload})=>{
      switch (type){
         case DELETEDATAREQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
         }
         case DELETEDATASUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
         }
         case DELETEDATAFAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
         }
         default:
            return state;
      }
}