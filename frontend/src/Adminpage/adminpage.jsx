import { Box, Button, Flex, Heading, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, } from "@chakra-ui/react"

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

    return (<Stack>
        <Stack width="30%" className="stack">
            <Button onClick={handlTrue}>User Managment</Button>
            <Button onClick={handlFalse}>Product Managment</Button>
        </Stack >
        <Stack display= {state ? "block" :"none"}>
        <ProductPage/>
        </Stack>
        <Stack display={state ? "none" : "block"}>
        <Userlist/>
        </Stack>
       
    </Stack>
    )
}

export { AdminPage }