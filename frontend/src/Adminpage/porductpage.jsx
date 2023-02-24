
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure, Skeleton, SkeletonText, SkeletonCircle, Spinner, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdataaction } from '../Redux/Products/getdata.action'
import AddProd from './addproduct'
import ProductCard from './productcard'
const ProductPage = () => {

    const dispatch = useDispatch()

    const { products, isError, isLoading } = useSelector(store => store.getdatareducer)
    console.log(products)
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        dispatch(getdataaction(token))
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Stack>
            <Flex justifyContent="space-around" alignItems="center">
                <h3>ProductCount:{products.length}</h3>
                <Button onClick={onOpen}>Add Product</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Enter the Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <AddProd onClose={onClose}/>
                        </ModalBody>
                    </ModalContent>
                </Modal>

            </Flex>
            {
                isLoading ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'
              /> :<SimpleGrid columns={[2, 3, 4, 4]} width="100%" gap={5}>
              {
                  products && products.map(ele => <ProductCard key={ele.id} {...ele} />)
              }

          </SimpleGrid>
            }
        


        </Stack>
    )
}

export default ProductPage
