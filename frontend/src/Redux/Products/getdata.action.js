import { GETDATAREQUEST,GETDATAFAILURE,GETDATASUCCESS } from "./getdata.actiontype";
import axios from "axios"
export const getdataaction = (token) => (dispatch)=>{
       dispatch({type:GETDATAREQUEST})
       return axios.get("https://exuberant-slippers-slug.cyclic.app/products",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":token
              }
       })
       .then(res=>dispatch({type:GETDATASUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:GETDATAFAILURE,payload:err}))
}


 