import axios from "axios"

export const getByBrand = async(str)=>{
    let data ;
    if(str){
        data= await axios.get(`http://localhost:3000/data?brand=${str}`);
        console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}

export const getByRangePrice = async(str)=>{
    let data ;
    if(str){
        data= await axios.get(`http://localhost:3000/data?brand=${str}`);
        console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}

export const getByDiscount = async(str)=>{
    let data ;
    if(str){
        data= await axios.get(`http://localhost:3000/data?brand=${str}`);
        console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}

export const getByOffers = async(str)=>{
    let data ;
    if(str){
        data= await axios.get(`http://localhost:3000/data?brand=${str}`);
        console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}

export const getByAvailabilty = async(str)=>{
    let data ;
    if(str){
        data= await axios.get(`http://localhost:3000/data?brand=${str}`);
        console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}

export const getBySort = async(str)=>{
    let data ;
    if(str){
        data= await axios.get(`http://localhost:3000/data?brand=${str}`);
        console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}