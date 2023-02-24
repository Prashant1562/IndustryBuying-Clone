import axios from "axios"
import { UPDATEDATASUCCESS,UPDATEDATAFAILURE,UPDATEDATAREQUEST } from "./updatedata.actiontype"
export const updatedataaction = (value,id,token) => (dispatch)=>{
       dispatch({type:UPDATEDATAREQUEST})
       return axios.patch(`https://exuberant-slippers-slug.cyclic.app/products${id}`,{
              headers:{
                     "Content-type":"application/json",
                     "Authorization":token
              },
              body:JSON.stringify(value)
       })
       .then(res=>dispatch({type:UPDATEDATASUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:UPDATEDATAFAILURE}))
}
