import axios from "axios"

export const getDataByAPI = async()=>{
    let data ;
    data = await axios.get("http://localhost:3000/data");
    return data
}
