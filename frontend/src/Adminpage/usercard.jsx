import { Button, Td, Tr } from '@chakra-ui/react'
import React from 'react'

const UserCard = ({ email, gender, firstname, lastname }) => {


    const handlClick = () => {
         
    }
    return (<Tr onClick={handlClick} color="orange" backgroundColor={'teal'}>
        <Td textAlign="center">{firstname}</Td>
        <Td textAlign="center">{lastname}</Td>
        <Td textAlign="center">{email}</Td>
        <Td textAlign="center">{gender}</Td>
        <Td textAlign="center"><Button color="red">Ban</Button></Td>
    </Tr>

    )
}

export default UserCard
