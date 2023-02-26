import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getbanuseraction } from '../Redux/Users/getbanuseraction'
import BanuserCard from './banusercard'
import UserCard from './usercard'

const BannedUserList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getbanuseraction())
    },[])
    const products = useSelector(store=>store.getbanuserreducer)
   console.log(products)
    return (
      <TableContainer>
      <Table variant='simple'>
        <Thead  backgroundColor="black">
          <Tr >
            <Th textAlign="center">Email</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
         {
        //   products && products.map(ele=><BanuserCard key={ele.id} {...ele}/>)
         }
        </Tbody>
      </Table>
    </TableContainer>
    )
}

export default BannedUserList
