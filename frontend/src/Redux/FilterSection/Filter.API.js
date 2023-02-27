import axios from "axios"

export const getData = async()=>{
    let data ;
    
        data= await axios.get(`https://exuberant-slippers-slug.cyclic.app/products`);
        // data = await axios.get(`http://localhost:4441/products`)
        // console.log(data)
        return data
}


export const getDataPatch = async(value)=>{
    let data = [];
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || "";
    // console.log(value)
    try{
        data.push(await axios.patch.patch(
            `https://doubtful-wasp-cowboy-boots.cyclic.app/products/quantity/${value.id}`,
            value,
            {
              headers: {
                Authorization: "Bearer" + " " + token,
                GSTIN: GSTIN,
              },
            }
          ))

        console.log(data)
        return data;

    }
    catch(err){
        console.log("Error:",err)
    }
       
}

export const getDataPost = async(value)=>{
    let data = [];
    console.log(value)
    try{
        data.push(await axios.post(`https://exuberant-slippers-slug.cyclic.app/products/post/${value._id}`,value
        ))
        console.log(data)
        return data;

    }
    catch(err){
        console.log("Error:",err)
    }
        
}



export const getByBrand = async(str)=>{
    
     let data = await axios.get(`https://exuberant-slippers-slug.cyclic.app/products/filter?brand=${str}`);
    // let data = await axios.get(`http://localhost:4441/products/filter?brand=${str}`)
     return data;
   
}


export const getByRangePrice = async(str,str1)=>{
       console.log(str,str1)
       let data
       try{
         data= await axios.get(`https://exuberant-slippers-slug.cyclic.app/products/price/filter?price=${str}&price=${str1}`);
        // console.log(data)
       }
       catch(err){
        console.log("Error:",err)
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

// export const getByPrice_Discount = async(str, array)=>{
//     let data ;
//     if(str.includes("Price")){
//         if(str.includes("Low to High"))
//         {
//             console.log(array,"Hello i am array")
//             // data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&asc=asc&price=price`);
          
//             data = await array.sort((a,b)=>{if(a.price>b.price)return 1;if(a.price<b.price)return -1;return 0})
//         }
//         else{
//             // data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&dsc=dsc&price=price`);
//             data = array.sort((a,b)=>{if(a.price>b.price) return -1; if(a.price<b.price) return 1; return 0})
//         }
//     }
//     else if(str.includes("Discount")){
//         if(str==="Discount - Low to High")
//         {
//             data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&asc=asc&discount=discount`);
//             //  console.log(data)
//         }
//         else{
//             data= await axios.get(`http://localhost:4441/products/filter?limit=10&skip=1&dsc=dsc&discount=discount`);
//         }
//     }
//     else if(str==="Popularity"){
       
//             data= await axios.get(`http://localhost:4441/products`);
//     }
//     else{
//         console.log("Hellldldldldldl",str)
//             data= await axios.get(`http://localhost:4441/products`);
//     }
//     return data
// }


export const getByPrice_Discount = (str, array)=>{
    let data ;
    if(str.includes("Price")){
        if(str.includes("Low to High"))
        {
            data = array.sort((a,b)=>{if(a.price>b.price)return 1;if(a.price<b.price)return -1;return 0})
        }
        else{
            data = array.sort((a,b)=>{if(a.price>b.price)return -1;if(a.price<b.price) return 1;return 0})
        }
    }
    else if(str.includes("Discount")){
        if(str==="Discount - Low to High")
        {
            data = array.sort((a,b)=>{if(a.category>b.category)return 1;if(a.category<b.category) return -1;return 0})
        }
        else{
            data = array.sort((a,b)=>{if(a.category>b.category)return -1;if(a.category<b.category) return 1;return 0})
        }
    }
    return data
}