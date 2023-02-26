import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Sidebar from './sidebar'

const DrawerJs = ({handlFalse,handlTrue,state}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (<>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
    Open
</Button>
<Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
    finalFocusRef={btnRef}
>
    <DrawerOverlay />
    <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
           <Sidebar handlFalse={handlFalse} handlTrue={handlTrue} state={state}/>
        </DrawerBody>
    </DrawerContent>
</Drawer>
</>
  )
}

export default DrawerJs
