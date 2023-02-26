import { Box, Button, Flex, Heading, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, PopoverCloseButton, PopoverHeader, PopoverArrow, Portal, Popover, PopoverContent, PopoverTrigger, PopoverBody, } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from "react"
import ProductPage from "./porductpage"
import Userlist from "./userlist"
import "./admin.css"
import DrawerJs from "./drawer"
import Sidebar from "./sidebar"
const AdminPage = () => {
    const [state, setState] = useState(true)
    const initRef = useRef()

    const handlTrue = () => {

        setState(true)
    }
    const handlFalse = () => {
        setState(false)
    }

    return (<Stack>
        <Flex border="1px solid red">
            <div className="drawer">
                <DrawerJs />
            </div>
            <Button>Home Page</Button>
            <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
                {({ isOpen, onClose }) => (
                    <>
                        <PopoverTrigger>
                            <Button>Logout</Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverHeader>Are You sure ?</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Button mt={4} colorScheme='blue' onClick={onClose} ref={initRef} >
                                        Yes
                                    </Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </>
                )}
            </Popover>
        </Flex>
        <Flex display="flex" justifyContent="space-between" alignItems="center" width="100%" >
            <div className="sidebar">
              <Sidebar handlFalse={handlFalse} handlTrue={handlTrue} state={state}/>
            </div>
        
            <Stack display={state ? "block" : "none"} className="stack" height="100vh" >
                <ProductPage />
            </Stack>
            <Stack display={state ? "none" : "block"} className="stack"  height="100vh">
                <Tabs>
                    <TabList >
                        <Tab fontSize={["80%", "80%", "80%", "80%", "80%"]} className='tab'>Users List</Tab>
                        <Tab fontSize={["80%", "80%", "80%", "80%", "80%"]} className='tab'>Banned Users List</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Userlist />
                        </TabPanel>
                        <TabPanel>
                            <Userlist />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>

        </Flex>
    </Stack>
    )
}

export default AdminPage 