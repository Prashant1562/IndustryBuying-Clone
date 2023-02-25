
import { Button, Flex,Stack,Spinner,Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdataaction } from '../Redux/Products/getdata.action'
import AddProd from './addproduct'
import ProductCard from './productcard'
const ProductPage = () => {

    const dispatch = useDispatch()

    const { products, isError, isLoading } = useSelector(store => store.getdatareducer)
    console.log(products)
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        dispatch(getdataaction(token))
    }, [])
    return (
        <Stack width={["100%","100%","100%","100%"]}>
            <Flex justifyContent="space-around" alignItems="center">
                <h3>ProductCount:{products.length}</h3>
            </Flex>
            <TableContainer width={["100%","100%","100%","100%"]}>
    <Table variant='simple'>
      <Thead  backgroundColor="black">
        <Tr width={["100%","100%","100%","100%"]}>
          <Th textAlign="center">Iamge</Th>
          <Th textAlign="center">Brand</Th>
          <Th textAlign="center">Category</Th>
          <Th textAlign="center">Price</Th>
          <Th textAlign="center">Edit</Th>
          <Th textAlign="center">Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
       {
        products && products.map(ele=><ProductCard key={ele.id} {...ele}/>)
       }
      </Tbody>
    </Table>
  </TableContainer>
            
        


        </Stack>
    )
}

export default ProductPage
