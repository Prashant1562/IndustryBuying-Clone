import axios from "axios";
import { DELETEDATAFAILURE,DELETEDATAREQUEST,DELETEDATASUCCESS } from "./deletedata.actiontype";




export const deletedataaction = (id)=>(dispatch)=>{
     console.log(id)
     dispatch({type:DELETEDATAREQUEST})
     return axios.delete(`https://exuberant-slippers-slug.cyclic.app/products/delete/${id}`,{
          headers:{
               "Content-type":"application/json",
               "Authorization":"token"
        }
     })
     .then(res=>dispatch({type:DELETEDATASUCCESS,payload:res.data}))
     .catch(err=>dispatch({type:DELETEDATAFAILURE}))
}