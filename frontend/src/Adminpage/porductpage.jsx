
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdataaction } from '../Redux/Products/getdata.action'
import AddProd from './addproduct'
import ProductCard from './productcard'
const ProductPage = () => {

    const dispatch = useDispatch()
    
    const product = useSelector(store=>store.getdatareducer.products)
    console.log(product)
    useEffect(()=>{
         dispatch(getdataaction())
    },[])

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Stack>
            <Flex justifyContent="space-around" alignItems="center">
                <h3>ProductCount</h3>
                <Button onClick={onOpen}>Add Product</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Enter the Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <AddProd />
                        </ModalBody>
                    </ModalContent>
                </Modal>

            </Flex>
            <SimpleGrid columns={[2, 3, 4, 4]} width="100%" gap={5}>
                {
                    product && product.map(ele=><ProductCard key={ele.id} {...ele}/>)
                }
                
            </SimpleGrid>
        </Stack>
    )
}

export default ProductPage
