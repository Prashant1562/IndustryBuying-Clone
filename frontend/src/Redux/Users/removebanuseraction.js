import { REMOVEBANFAILURE,REMOVEBANREQUEST,REMOVEBANSUCCESS } from "./removebanuseractiontype"
import axios from "axios"
export const removebanuseraction = (token) => (dispatch)=>{
       dispatch({type:REMOVEBANREQUEST})
       return axios.get("https://exuberant-slippers-slug.cyclic.app/block",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":token
              }
       })
       .then(res=>dispatch({type:REMOVEBANSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:REMOVEBANFAILURE,payload:err}))
}