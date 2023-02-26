import axios from "axios"
import { UPDATEDATASUCCESS,UPDATEDATAFAILURE,UPDATEDATAREQUEST } from "./updatedata.actiontype"
export const updatedataaction = (id,value) => (dispatch)=>{
       console.log(id,value)
       dispatch({type:UPDATEDATAREQUEST})
       return axios.patch(`https://exuberant-slippers-slug.cyclic.app/products/update/${id}`,{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":"token"
              },
              body:JSON.stringify(value)
       })
       .then(res=>dispatch({type:UPDATEDATASUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:UPDATEDATAFAILURE}))
}
