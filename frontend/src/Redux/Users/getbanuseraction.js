
import { GETBANUSERFAILURE, GETBANUSERREQUEST,GETBANUSERSUCCESS } from "./getbanuseractiontype"
import axios from "axios"
export const getbanuseraction = (token) => (dispatch)=>{
       dispatch({type:GETBANUSERREQUEST})
       return axios.get("https://exuberant-slippers-slug.cyclic.app/block",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":token
              }
       })
       .then(res=>dispatch({type:GETBANUSERSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:GETBANUSERFAILURE,payload:err}))
}
