
import axios from "axios"

import { BANUSERREQUEST,BANUSERFAILURE,BANUSERSUCCESS } from "./banuseractiontype"
export const banuseraction = (email) => (dispatch)=>{
    const token = JSON.parse(localStorage.getItem("token"))
       dispatch({type:BANUSERREQUEST})
       return axios.post("https://exuberant-slippers-slug.cyclic.app/block",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":token
              },
              body:JSON.stringify(email)
       })
       .then(res=>dispatch({type:BANUSERSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:BANUSERFAILURE,payload:err}))
}
