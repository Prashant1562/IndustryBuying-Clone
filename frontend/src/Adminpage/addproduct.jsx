import { Stack, Heading, Input, FormControl, FormLabel, Select, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
const AddProd = () => {
  const init = {
    title: "",
    brand: "",
    price: "",
    count: "",
    category: "",
    images: {},

  }
  const [prod, setProd] = useState(init)
  const handleChange = (e) => {
    const { name, value } = e.target
    setProd({ ...prod, [name]: value })
  }
  const init2 ={
    image1:"",
    image2:"",
    image3:"",
    image4:""
}

const [img,setImg] = useState(init2)
const handlChange =(e)=>{
     const {name,value} = e.target
     setImg({...img,[name]:value})
}



  return (<Stack>
    <form>
      <FormControl>
        <FormLabel>Enter Product Name</FormLabel>
        <Input name="title" type="text" onChange={(e) => handleChange(e)} value={prod.title} />
        <FormLabel>Enter Product Price</FormLabel>
        <Input type="number" name="price" onChange={(e) => handleChange(e)} value={prod.price} />
        <FormLabel>Enter Product Brand</FormLabel>
        <Input type="text" name="brand" onChange={(e) => handleChange(e)} value={prod.brand} />
        <FormLabel>Enter Product Quantity</FormLabel>
        <Input type="number" name="count" onChange={(e) => handleChange(e)} value={prod.count} />
        <FormLabel>Select Product Category</FormLabel>
        <Select placeholder='Select option' name="category" onChange={(e) => handleChange(e)}>
          <option value='tshirt'>T-Shirt</option>
          <option value='shirt'>Shirt</option>
          <option value='kurta'>Kurta</option>
          <option value='shoes'>Shoes</option>
        </Select>
        <FormLabel>Enter Image1</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image1" type="text" value={img.image1} />
      <FormLabel>Enter Image2</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image2" type="text" value={img.image2} />
      <FormLabel>Enter Image3</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image3" type="text" value={img.image3}/>
      <FormLabel>Enter Image4</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image4" type="text" value={img.image4} />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  </Stack >
  )
}

export default AddProd
