import { Stack, Image, Box, Card, Button, Flex, Tabs, TabList, Tab, TabPanel, TabPanels, Input, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const ProductCard = () => {
 
  const [value, setValue] = useState()


  return (<Stack className='card' fontSize={["80%","90%","90%","90%","90%"]} >
    <Image  />
    <h3></h3>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <Flex className='qty' width="100%" >
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
    <Button>Delete</Button>
  </Stack>
  )
}

export default ProductCard
