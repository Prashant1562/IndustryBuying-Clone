
import { GETBANUSERFAILURE, GETBANUSERREQUEST,GETBANUSERSUCCESS } from "./getbanuseractiontype"
import axios from "axios"
export const getbanuseraction = () => (dispatch)=>{
       dispatch({type:GETBANUSERREQUEST})
       return axios.get("https://exuberant-slippers-slug.cyclic.app/block",{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2ZiMTg2MjVhZWM4M2QzYjM5ODk2YmEiLCJpYXQiOjE2Nzc0MDAyMjZ9.ctJu7-A_FKiiP_mEoRNAY8NGqv9x0oCnuAaXFjgEzBk"
              }
       })
       .then(res=>dispatch({type:GETBANUSERSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:GETBANUSERFAILURE,payload:err}))
}
