import { GETUSERSFAILURE,GETUSERSREQUEST,GETUSERSSUCCESS } from "./getusersactiontype"
import axios from "axios"
export const getuseraction = (token) => (dispatch)=>{
       dispatch({type:GETUSERSREQUEST})
       return axios.get("https://exuberant-slippers-slug.cyclic.app/users",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":token
              }
       })
       .then(res=>dispatch({type:GETUSERSSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:GETUSERSFAILURE,payload:err}))
}
