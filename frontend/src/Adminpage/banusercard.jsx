

import { Button, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getbanuseraction } from '../Redux/Users/getbanuseraction'
import { removebanreducer } from '../Redux/Users/removebanuserreducer'

const BanuserCard = ({email}) => {
    
    const dispatch = useDispatch()
    const handleRemove = ()=>{
             dispatch(removebanreducer(email))
             .then(res=>getbanuseraction())
    }
    return (<Tr color="orange" backgroundColor={'teal'}>
        <Td textAlign="center">{email}</Td>
        <Td textAlign="center"><Button color="red" onClick={handleRemove}>Remove</Button></Td>
    </Tr>
    )
}

export default BanuserCard
