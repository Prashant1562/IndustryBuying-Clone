

import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AddProd from './addproduct'
import ProductCard from './productcard'
const ProductPage = () => {
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
            <SimpleGrid columns={[2, 3, 5, 6]} width="100%" gap={5}>
                <ProductCard />
            </SimpleGrid>
        </Stack>
    )
}

export default ProductPage
