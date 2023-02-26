import { REMOVEBANFAILURE,REMOVEBANREQUEST,REMOVEBANSUCCESS } from "./removebanuseractiontype"
import axios from "axios"
export const removebanuseraction = (id) => (dispatch)=>{
        const admintoken = JSON.parse(localStorage.getItem("adminToken"))
       dispatch({type:REMOVEBANREQUEST})
       return axios.delete(`https://exuberant-slippers-slug.cyclic.app/block/delete/${id}`,{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":admintoken
              }
       })
       .then(res=>dispatch({type:REMOVEBANSUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:REMOVEBANFAILURE,payload:err}))
}