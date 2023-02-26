import { Button, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { banuseraction } from '../Redux/Users/banuseraction'

const UserCard = ({id, email, gender, firstname, lastname }) => {

    const dispatch = useDispatch()
    const handleBan = () => {
         dispatch(banuseraction(email))
         .then(res=>console.log(res))
    }
    return (<Tr  color="orange" backgroundColor={'teal'}>
        <Td textAlign="center">{firstname}</Td>
        <Td textAlign="center">{lastname}</Td>
        <Td textAlign="center">{email}</Td>
        <Td textAlign="center">{gender}</Td>
        <Td textAlign="center"><Button color="red" onClick={handleBan}>Ban</Button></Td>
    </Tr>

    )
}

export default UserCard
