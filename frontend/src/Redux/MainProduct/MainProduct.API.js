import axios from "axios"

export const getDataByAPI = async(id)=>{
    let data ;
    if(id){
        data = await axios.get(`http://localhost:3000/data?id=${id}`);
        // http://localhost:3000/data?id=2
        console.log(data)
    }
    else{
        data = await axios.get("http://localhost:3000/data");
    }
 
    return data
}


