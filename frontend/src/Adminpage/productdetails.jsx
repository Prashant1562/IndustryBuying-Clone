import { Stack ,Image, Flex, Tabs, TabList, TabPanels, TabPanel, Button, Input, Tab} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ProductDetails = (props) => {
    const { id, brand, quantity, images, categories, color, gender, price, } = props
    const dispatch = useDispatch()
    const [value, setValue] = useState()
  

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
              <form >
                <Input type="number" placeholder='Enter the amount' onChange={(e) => setValue(e.target.value)} />
                <Button type="submit" >+</Button>
              </form>
     
            </TabPanel>
            <TabPanel>
              <form >
                <Input type="number" placeholder='Enter the amount' onChange={(e) => setValue(e.target.value)} />
                <Button type="submit" >-</Button>
              </form>
  
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Stack>
    )
  }

export default ProductDetails
