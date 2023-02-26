import axios from "axios"

export const getData = async()=>{
    let data ;
    
        // data= await axios.get(`https://exuberant-slippers-slug.cyclic.app/products`);
        data = await axios.get(`http://localhost:4441/products`)
        // console.log(data)
        return data
}


export const getDataPatch = async(value)=>{
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || "";
    let data = [];
        data.push(await axios.patch(`https://exuberant-slippers-slug.cyclic.app/products/patch/${value.id}`,value,
          {
            headers: {
              Authorization: "Bearer" + " " + token,
              GSTIN: GSTIN,
            },
          }
        ))
        // data.push(await axios.patch(`http://localhost:4441/products/patch/${value.id}`,value,
        //   {
        //     headers: {
        //       Authorization: "Bearer" + " " + token,
        //       GSTIN: GSTIN,
        //     },
        //   }
        // ))
        // console.log(data)
        return data;
}


export const getByBrand = async(str)=>{
    
     let data = await axios.get(`https://exuberant-slippers-slug.cyclic.app/products/filter?brand=${str}`);
    // let data = await axios.get(`http://localhost:4441/products/filter?brand=${str}`)
     return data;
   
}


export const getByRangePrice = async(str,str1)=>{
   
       let data= await axios.get(`http://localhost:4441/products/price/filter?&price=${str}&price=${str1}`);
    //    let data= await axios.get(`http://localhost:4441/products/filter?&price=${str1}&pric=${str}`);
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