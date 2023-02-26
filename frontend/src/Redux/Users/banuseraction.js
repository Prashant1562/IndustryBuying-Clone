
import axios from "axios"

import { BANUSERREQUEST,BANUSERFAILURE,BANUSERSUCCESS } from "./banuseractiontype"
export const banuseraction = (email) => (dispatch)=>{
      console.log(email)
       dispatch({type:BANUSERREQUEST})
       return axios.post("https://exuberant-slippers-slug.cyclic.app/block",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2ZiMTg2MjVhZWM4M2QzYjM5ODk2YmEiLCJpYXQiOjE2Nzc0MDAyMjZ9.ctJu7-A_FKiiP_mEoRNAY8NGqv9x0oCnuAaXFjgEzBk"
              },
              body:JSON.stringify(email)
       })
       .then(res=>dispatch({type:BANUSERSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:BANUSERFAILURE,payload:err}))
}
