import { Stack ,Image, Flex, Tabs, TabList, TabPanels, TabPanel, Button, Input, Tab} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getdataaction } from '../Redux/Products/getdata.action'
import { updatedataaction } from '../Redux/Products/updatedata.action'

const ProductDetails = (props) => {
    const { id, brand, quantity, images, categories, color, gender, price, } = props
   
    const dispatch = useDispatch()
    const init ={
      quantity:""
    }
    const [value, setValue] = useState(init)

    const handleChange = (e)=>{
         setValue({...value,quantity:e.target.value})
    }
 const handleSubmit = (e)=>{
       e.preventDefault()
        // sending PUT request with fetch API in javascript
        fetch(`https://exuberant-slippers-slug.cyclic.app/products/update/${id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "PATCH",    
          body: JSON.stringify(value)
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
             dispatch(getdataaction())
          });
      
   }

    return (<Stack className='card' fontSize={["80%","90%","90%","90%","90%"]} textAlign="center">
      <Image src={images[0]}  width="50%" margin="auto"/>
      <h3>{brand}</h3>
      {quantity < 5 ? <p className='countp'>{quantity}: stock is less</p> : <p>{quantity}</p>}
      <p>{categories}</p>
      <p>{color}</p>
      <p>{gender}</p>
      <p>{price}</p>
      <Flex className='qty' justifyContent="center">
        <Tabs>
          <TabList >
            <Tab fontSize={["80%","80%","80%","80%","80%"]} className='tab'>Qty Increase</Tab>
            <Tab  fontSize={["80%","80%","80%","80%","80%"]} className='tab'>Qty Decrease</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form onSubmit={handleSubmit}>
                <Input type="number" placeholder='Enter the amount' onChange={handleChange} />
                <Button type="submit" >Submit</Button>
              </form>
     
            </TabPanel>
            <TabPanel>
              <form onSubmit={handleSubmit} >
                <Input type="number" placeholder='Enter the amount'onChange={handleChange}/>
                <Button type="submit" >Submit</Button>
              </form>
  
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Stack>
    )
  }

export default ProductDetails
