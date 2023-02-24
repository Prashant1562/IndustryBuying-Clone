
import { ADDDATAREQUEST,ADDDATAFAILURE,ADDDATASUCCESS } from "./adddata.actiontype";

import axios from "axios";

export const adddataaction = (token,value)=>(dispatch)=>{
     dispatch({type:ADDDATAREQUEST})
     return axios.post(`https://exuberant-slippers-slug.cyclic.app/products`,{
          headers:{
               "Content-type":"application/json",
               "Authorization":token
        },
        body:JSON.stringify(value)
     })
     .then(res=>dispatch({type:ADDDATASUCCESS,payload:res.data}))
     .catch(err=>dispatch({type:ADDDATAFAILURE}))
}