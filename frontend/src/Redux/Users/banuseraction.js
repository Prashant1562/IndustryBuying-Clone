
import axios from "axios"

import { BANUSERREQUEST,BANUSERFAILURE,BANUSERSUCCESS } from "./banuseractiontype"
export const banuseraction = (email) => (dispatch)=>{
        const admintoken = JSON.parse( localStorage.getItem("adminToken"))
       dispatch({type:BANUSERREQUEST})
       return axios.post("https://exuberant-slippers-slug.cyclic.app/block/register",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":admintoken
              },
              body:JSON.stringify(email)
       })
       .then(res=>dispatch({type:BANUSERSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:BANUSERFAILURE,payload:err}))
}
