import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Loader = ()=>{
    return <Box>Loading...</Box>
}

const style={
    flexDirection:"column",
}

const Singleproductpage = () => {
    const {id} = useParams();
    console.log(id)
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);


    useEffect(()=>{
        setLoader(true);
      fetch()
      .then((res)=>res.json())
      .then((res)=>{  setData(res.data); setLoader(false);})
      .catch((err)=>{ console.log(err);setLoader(false);})
    },[]);

    const handleonClick = ()=>{
        console.log("Hello")
    }


    if(loader){
        return <Loader/> 
    }
  return (
    <Flex direction="column" width="20%" gap="3rem">
           <Flex direction="column" borderBottom="1px dashed rgba(185, 182, 182,0.5)" gap="1rem" >
                <Flex justifyContent="left" alignItems="center" gap="0.3rem">
                    <Heading as="h2" fontSize={30} color="#FA832A">₹ 11000 </Heading>
                    <Text mt="0.7rem" fontSize={12}> (GST inclusive price)</Text>
                </Flex>
                <Flex justifyContent="left" alignItems="center" gap="0.3rem">
                    <Heading fontSize={16}>₹ 11000</Heading>
                    <Text fontSize={12}>(GST extra)</Text>
                </Flex>
           </Flex>
           <Flex borderBottom="1px dashed rgba(185, 182, 182,0.5)" direction="column">
              <Text as="b">Update Quantity</Text>
              <Flex justifyContent="left" alignItems="top" direction="column">
                 <Flex>
                    <Button onClick={handleonClick} borderRadius="none">-</Button>
                    <Button disabled={1===1%1}>1</Button>
                    <Button onClick={handleonClick}>+</Button>
                 </Flex>
                 <Text fontSize={12}>minimum order Quantity- 1</Text>
                 <Text fontSize={12}>Piece</Text>
              </Flex>
           </Flex>
           <Text color="blue" to="/" borderBottom="1px dashed rgba(185, 182, 182,0.5)" fontSize={11}>Get customized price</Text>
           <Flex>
              <Button disabled as="b" backgroundColor="#4C993E" fontSize={13}>ADD TO CART</Button>
              <Button as="b" backgroundColor="#F98700" fontSize={13}>BUY NOW</Button>
           </Flex>


    </Flex>
  )
}

export default Singleproductpage