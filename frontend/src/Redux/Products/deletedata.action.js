import axios from "axios";
import { DELETEDATAFAILURE,DELETEDATAREQUEST,DELETEDATASUCCESS } from "./deletedata.actiontype";




export const deletedataaction = ()=>(dispatch)=>{
     dispatch({type:DELETEDATAREQUEST})
     return axios.delete("DELETEDATAFAILURE")
     .then(res=>dispatch({type:DELETEDATASUCCESS,payload:res.data}))
     .catch(err=>dispatch({type:DELETEDATAFAILURE}))
}