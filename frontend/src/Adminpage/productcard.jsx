
import React, { useEffect } from 'react'
import { Box, Button,Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,  Stack, useDisclosure, Td,Tr,Image } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { getdataaction } from '../Redux/Products/getdata.action'
import ProductDetails from './productdetails'
import { deletedataaction } from '../Redux/Products/deletedata.action'


const ProductCard = (props) => {
  const {images,_id,brand,price,category,quantity} = props

    const dispatch = useDispatch()
const navigate = useNavigate()

  const handleDelete = ()=>{
      dispatch(deletedataaction(_id))
      .then(res=>dispatch(getdataaction()))
  }
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (<Tr  color="orange" backgroundColor={'teal'} >
    <Td width={["10%","10%","8%","10%"]} textAlign="center"><Image src={images[0]}/></Td>
    <Td width={["10%","10%","8%","10%"]} textAlign="center">{brand}</Td>
    <Td width={["10%","10%","8%","10%"]} textAlign="center">{category}</Td>
    <Td width={["10%","10%","8%","10%"]} textAlign="center">{price}</Td>
    <Td width={["10%","10%","8%","10%"]} textAlign="center"> <Button onClick={onOpen}>Edit</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Enter the Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ProductDetails brand={brand} images={images} category={category} id={_id} price={price} quantity={quantity} onClose={onClose}/>
                        </ModalBody>
                    </ModalContent>
                </Modal></Td>
    <Td width={["20%","50%","80%","100%"]} textAlign="center"><Button color="red" onClick={handleDelete}>Del</Button></Td>
</Tr>
    )}

export default ProductCard
