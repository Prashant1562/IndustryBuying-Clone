import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text, Image, Input, InputGroup, InputRightElement, Stack, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { GetProductData } from '../../Redux/MainProduct/MainProduct.action'

const Loader = ()=>{
    return <Box>Loading...</Box>
}

const style={
    flexDirection:"column",
}

const Singleproductpage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    // const [data, setData] = useState([]);
    // const [loader, setLoader] = useState(false);
    const [count,setCount] = useState(1);
    const {loader,Data} = useSelector((store)=>store.ProductManager)


    useEffect( ()=>{
        dispatch(GetProductData(id));
    },[id,dispatch]);


    const handleonClick = (val)=>{
        console.log(val)
        setCount((value)=>value+val)
    }


    if(loader){
        return <Loader/> 
    }
  return (
   <Flex>
    <Flex direction="column">
{/* Top Section */}
    <Flex
        fontSize={13}
        padding="1rem"
        alignItems="center"
        // justifyContent="space-between"
      >
        <Link to="/">Home</Link>{" "}
        <Box>
          {" "}
          <ChevronRightIcon fontSize={16} />
        </Box>{" "}
        <Link to="">Agriculture Garden & Landscaping</Link>{" "}
        <Box>
          {" "}
          <ChevronRightIcon fontSize={16} />
        </Box>
        <Link to="">
          <Text as="b">Grain Processing Machine</Text>
        </Link>
      </Flex>
    {/* Image section */}
      <Flex>
      <Flex>
         <Image src="https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.52125501_1668012170622.webp"/>
      </Flex>
      <Flex direction="column">
         <Box borderBottom="1px solid #EEEEEE">
            <Heading mb={18} as="h1" fontSize={18}>AgriPro 3 HP Butterfly Rice Mill Machine without Motor APRM6N</Heading>
            <HStack>
                <Text fontSize={14} color="#A1A1A1">by</Text>
                <Text fontSize={14} color="#046699">AgriPro</Text>
            </HStack>
         </Box>
         <Box borderBottom="1px solid #EEEEEE">
            <Heading fontSize={15} textAlign="left">Features</Heading>
            <ul>
                <li>
                    <Flex style={{gap:"1rem"}}>
                        <Text flex="1">Brand Name :</Text>
                        <Text flex="3">AgriPro</Text>
                    </Flex>
                </li>
                <li>
                    <Flex>
                        <Text>Machine Size :</Text>
                        <Text>800(L) * 300(W) * 1130(H) mm</Text>
                    </Flex>
                </li>
                <li>
                    <Flex>
                        <Text>Spindle Speed :</Text>
                        <Text>1400-1600 RPM</Text>
                    </Flex>
                </li>
                <li>
                    <Flex>
                        <Text>Types of Product :</Text>
                        <Text>Rice Mill Machine</Text>
                    </Flex>
                </li>
                <li>
                    <Flex>
                        <Text>Production Capacity :</Text>
                        <Text>Rice ≥ 165-200 kg/hour, Millet ≥ 120-150 kg/hour</Text>
                    </Flex>
                </li>
                <li>
                    <Flex>
                        <Text>Certification :</Text>
                        <Text>ISO9001:2015,CCC</Text>
                    </Flex>
                </li>
            </ul>
            <Button>MORE DETAILS</Button>
            <Flex direction="column">
                <Link to="">More Agripro Grain Processing Machine</Link>
                <Link to="">More Grain Processing Machine</Link>
            </Flex>
            <Flex direction="column" >
                <Heading as="h1">Available offers</Heading>
                <Box> <Text>IB BNPL, No cost EMI </Text><Link to="">View Plans</Link> </Box>
            </Flex>
            <Flex direction="column">
                <Heading as="h1">Check Seriveability at your Pincode:</Heading>
                <InputGroup>
                    <Input placeholder='Enter your Pincode'/>
                    <InputRightElement>
                       <Button pl="0.5rem"  h='100%' size='base'> CHECK</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
         </Box>
      </Flex>
      </Flex>
    </Flex>
    {/* Right hand Price section */}
    {/* <Flex direction="column" width="25%" gap="3rem" padding="1rem 1.5rem" boxShadow= "rgba(0, 0, 0, 0.09) 0px 3px 12px">
           <Flex direction="column" borderBottom="1px dashed rgba(185, 182, 182,0.5)" gap="1rem" >
                <Flex justifyContent="left" alignItems="center" gap="0.3rem">
                    <Heading as="h2" fontSize={30} color="#FA832A">₹ {Data.data && count * Data.data[0].price} </Heading>
                    <Text mt="0.7rem" fontSize={12}> (GST inclusive price)</Text>
                </Flex>
                <Flex justifyContent="left" alignItems="center" gap="0.3rem">
                    <Heading fontSize={16}>₹ {Data.data && count * Data.data[0].price}</Heading>
                    <Text fontSize={12}>(GST extra)</Text>
                </Flex>
           </Flex>
           <Flex borderBottom="1px dashed rgba(185, 182, 182,0.5)" direction="column">
              <Text textAlign="left" as="b" fontSize={12}>Update Quantity</Text>
              <Flex justifyContent="space-between" alignItems="center">
                 <Flex border="1px solid grey" height="2.3rem">
                 <button style={{padding:"0.5rem"}} disabled={count<=1} onClick={()=>handleonClick(-1)}>-</button>
                   <Box height="80%" margin="auto" borderLeft="1px solid grey" borderRight="1px solid grey"> <button style={{padding:"0.5rem"}} backgroundColor="white" disabled>{count}</button></Box>
                   <button style={{padding:"0.5rem"}} disabled={count<=1} onClick={()=>handleonClick(1)}>+</button>
                 </Flex>
                 <Box>
                    <Text fontSize={12}>minimum order Quantity- 1</Text>
                    <Text textAlign="left" fontSize={12}>Piece</Text>
                 </Box>
              </Flex>
           </Flex>
           <Text color="blue" to="/" borderBottom="1px dashed rgba(185, 182, 182,0.5)" fontSize={11}>Get customized price</Text>
           <Flex direction="column" gap="0.7rem">
              <Button borderRadius="0.2rem" color="white" disabled as="b" backgroundColor="#4C993E" fontSize={13}>ADD TO CART</Button>
              <Button borderRadius="0.2rem" color="white" as="b" backgroundColor="#F98700" fontSize={13}>BUY NOW</Button>
           </Flex>
    </Flex> */}
   </Flex>
  )
}

export default Singleproductpage