import { Stack, Heading, Input, FormControl, FormLabel, Select, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adddataaction } from '../Redux/Products/adddata.action'
import { getdataaction } from '../Redux/Products/getdata.action'
const AddProd = ({onClose}) => {

  const dispatch = useDispatch()
  const init = {
    title: "",
    brand: "",
    price: "",
    quantity:"",
    category: "",
    images: [],
  }
  const [prod, setProd] = useState(init)
  const handleChange = (e) => {
    const { name, value } = e.target
    setProd({ ...prod, [name]: value })
  }
const init2 =[]

const [img,setImg] = useState(init2)
const handlChange =(e)=>{
     setImg([...img,e.target.value])
}


const handleSubmit = (e)=>{
     e.preventDefault()
     const newata = {...prod,images:img}
     const token = JSON.parse(localStorage.getItem("token"))
     dispatch(adddataaction(token,newata))
     .then(res=>dispatch(getdataaction()))
     onClose()
}

  return (<Stack>
    <form onSubmit={handleSubmit}>
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
          <option value='Agriculture Garden & Landscaping'>Agriculture Garden & Landscaping</option>
          <option value='Office Supplies'>Office Supplies</option>
          <option value='Electrical'>Electrical</option>
          <option value='Furniture,Hospitality and Food Services'>Furniture,Hospitality and Food Services</option>
        </Select>
        <FormLabel>Enter Image1</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image1" type="text" value={img[0]} />
      <FormLabel>Enter Image2</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image2" type="text" value={img[1]} />
      <FormLabel>Enter Image3</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image3" type="text" value={img[2]}/>
      <FormLabel>Enter Image4</FormLabel>
      <Input onChange={(e)=>handlChange(e)} name="image4" type="text" value={img[3]} />
      </FormControl>
      <Button type="submit" margin="auto" display="block" backgroundColor="teal">Submit</Button>
    </form>
  </Stack >
  )
}

export default AddProd
