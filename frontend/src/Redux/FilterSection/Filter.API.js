import axios from "axios"

export const getData = async()=>{
    let data ;
        data= await axios.get(`http://localhost:3000/data`);
        // console.log(data)
        return data
}


let val = "";
export const getByBrand = async(str)=>{
     val = val + `brand=${str}&`
     let data;
     console.log(val,"Hello");
    if(str){
        
        data= await axios.get(`http://localhost:3000/data?${str}`);
        // console.log(data)
    }
    else {
        data = await axios.get("http://localhost:3000/data");
    }
    return data
}



export const getByRangePrice = async(str,str1)=>{
   
       let data= await axios.get(`http://localhost:4441/products/price/filter?&price=${str1}`);
        // console.log(data)
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

export const getByPrice_Discount = async(str)=>{
    let data ;
    if(str.includes("Price")){
        if(str.includes("Low to High"))
        {
            data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&asc=asc&price=price`);
            //  console.log(data.data)
        }
        else{
            data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&dsc=dsc&price=price`);
        }
    }
    else if(str.includes("Discount")){
        if(str==="Discount - Low to High")
        {
            data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&asc=asc&discount=discount`);
            //  console.log(data)
        }
        else{
            data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&dsc=dsc&discount=discount`);
        }
    }
    else if(str==="Popularity"){
       
            data= await axios.get(`http://localhost:4441/products`);
    }
    else{
        console.log("Hellldldldldldl",str)
            data= await axios.get(`http://localhost:4441/products`);
    }
    return data
}