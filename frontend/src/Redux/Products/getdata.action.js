import { GETDATAREQUEST,GETDATAFAILURE,GETDATASUCCESS } from "./getdata.actiontype";
import axios from "axios"
export const getdataaction = () => (dispatch)=>{
       dispatch({type:GETDATAREQUEST})
       return axios.get("https://cheerful-trunks-duck.cyclic.app/men")
       .then(res=>dispatch({type:GETDATASUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:GETDATAFAILURE,payload:err}))
}


 