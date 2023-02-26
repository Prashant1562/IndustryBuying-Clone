import { Box, Button, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, } from "@chakra-ui/react"

import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import ProductPage from "./porductpage"
import Userlist from "./userlist"
import "./admin.css"
const AdminPage = () => {
    const [state, setState] = useState(true)

const handlTrue = ()=>{
 
    setState(true)
}
const handlFalse = ()=>{
    setState(false)
}
console.log(state)

    return (<Flex display="flex" justifyContent="space-between" alignItems="center" border="1px solid black" >
        <Stack width="29%" className="stack" border="1px solid red">
            <Button onClick={handlTrue}>Product Managment</Button>
            <Button onClick={handlFalse}>User Managment</Button>
        </Stack>
        <Stack display= {state ? "block" :"none"} width="69%" border="1px solid black" height="100vh" overflow="scroll">
        <ProductPage/>
        </Stack>
        <Stack display={state ? "none" : "block"} width="69%" border="1px solid orange" height="100vh" overflowY="scroll">
        <Userlist/>
        </Stack>
       
    </Flex>
    )
}

export { AdminPage }