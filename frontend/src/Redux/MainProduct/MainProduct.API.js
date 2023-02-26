import axios from "axios"

export const getDataByAPI = async(id)=>{
    let data ;
    if(id){
        // data = await axios.get(`https://exuberant-slippers-slug.cyclic.app/products/getbyID/${id}`);
        data = await axios.get(`http://localhost:4441/products//getbyID/${id}`);
        // http://localhost:3000/data?id=2
        console.log(data)
    }
    else{
        // data = await axios.get(`https://exuberant-slippers-slug.cyclic.app/products`);
        data = await axios.get(`http://localhost:4441/products`);
        // console.log(data)
    }
 
    return data
}


