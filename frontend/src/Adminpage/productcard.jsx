import { Stack, Image, Box, Card, Button, Flex, Tabs, TabList, Tab, TabPanel, TabPanels, Input,Skeleton,SkeletonText,SkeletonCircle } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedataaction } from '../Redux/Products/deletedata.action'
import { updatedataaction } from '../Redux/Products/updatedata.action'


const ProductCard = (props) => {
  const { id, brand, quantity, images, category, price,} = props
  const init ={
     quantity:""
  }
  const [value, setValue] = useState(init)
  const dispatch = useDispatch()

  const handleDelete = (e)=>{
    const token =JSON.parse(localStorage.getItem("token"))
    e.preventDefault()
    dispatch(deletedataaction(id,token))
  }
  const handleupdate = (e)=>{
     e.preventDefault()
     const token =JSON.parse(localStorage.getItem("token"))
     dispatch(updatedataaction(value,id,token))
     setValue(init)
  }

  return (<Stack className='card' fontSize={["80%","90%","90%","90%","90%"]} border="1px solid red">
   
    <Image src={images[0]} />
    <h3>{brand}</h3>
    <p>{price}</p>
    <p>{category}</p>
    <p>{quantity}</p>

    <Flex className='qty' width="100%" >
      <Tabs>
        <TabList >
          <Tab fontSize={["80%","80%","80%","80%","80%"]} className='tab'>Qty Increase</Tab>
          <Tab  fontSize={["80%","80%","80%","80%","80%"]} className='tab'>Qty Decrease</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form onSubmit={(e)=>handleupdate}>
              <Input type="number" placeholder='Enter the amount' onChange={(e) => setValue({...value,quantity:e.target.value})}  value={value.quantity}/>
              <Button type="submit" >+</Button>
            </form>
   
          </TabPanel>
          <TabPanel>
            <form onSubmit={(e)=>handleupdate}>
              <Input type="number" placeholder='Enter the amount' onChange={(e) => setValue({...value,quantity:e.target.value})} value={value.quantity}/>
              <Button type="submit" >-</Button>
            </form>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    <Button onClick={handleDelete}>Delete</Button>
  </Stack>
  )
}

export default ProductCard
