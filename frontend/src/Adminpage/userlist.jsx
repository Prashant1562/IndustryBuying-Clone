import { Box, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getuseraction } from '../Redux/Users/getusersaction'
import UserCard from './usercard'

const Userlist = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getuseraction())
  },[])
  const {products,isLoading,isError} = useSelector(store=>store.getuserreducer)
  console.log(products)
  return (
    <TableContainer>
    <Table variant='simple'>
      <Thead  backgroundColor="black">
        <Tr >
          <Th textAlign="center">First Name</Th>
          <Th textAlign="center">Last Name</Th>
          <Th textAlign="center">Email</Th>
          <Th textAlign="center">Gender</Th>
          <Th textAlign="center">Ban</Th>
        </Tr>
      </Thead>
      <Tbody>
       {
        products && products.map(ele=><UserCard key={ele.id} {...ele}/>)
       }
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default Userlist
