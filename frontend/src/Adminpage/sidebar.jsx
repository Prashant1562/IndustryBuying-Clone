import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import AddProd from './addproduct'

const Sidebar = (props) => {
    const {handlFalse,handlTrue,state} = props
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Stack>
    <Button onClick={handlTrue} backgroundColor="teal">Product Managment</Button>
    <Button onClick={onOpen} display={state?"block":"none"} backgroundColor="teal">Add Product</Button>
    <Modal isOpen={isOpen} onClose={onClose} display={state ? "block" : "none"}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalBody>
                <AddProd onClose={onClose} />
            </ModalBody>
        </ModalContent>
    </Modal>
    <Button onClick={handlFalse} backgroundColor="teal">User Managment</Button>
</Stack>
  )
}

export default Sidebar
