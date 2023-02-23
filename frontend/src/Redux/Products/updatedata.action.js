import axios from "axios"
import { UPDATEDATASUCCESS,UPDATEDATAFAILURE,UPDATEDATAREQUEST } from "./updatedata.actiontype"
export const updatedataaction = () => (dispatch)=>{
       dispatch({type:UPDATEDATAREQUEST})
       return axios.patch("https://cheerful-trunks-duck.cyclic.app/men")
       .then(res=>dispatch({type:UPDATEDATASUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:UPDATEDATAFAILURE}))
}
