import { UPDATEDATASUCCESS,UPDATEDATAFAILURE,UPDATEDATAREQUEST } from "./updatedata.actiontype"

const init = {
    isLoading:false,
    isError:false,
    data:[]
}

export const updatedatareducer = (state=init,{type,payload})=>{
    // console.log(payload)
      switch (type){
         case UPDATEDATAREQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
         }
         case UPDATEDATASUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }
         }
         case UPDATEDATAFAILURE:{
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