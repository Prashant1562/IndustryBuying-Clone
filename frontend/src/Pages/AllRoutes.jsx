import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainProduct from '../Components/Products/MainProduct'
import Singleproductpage from '../Components/SingleProductPage/singleproductpage'
import HomePage from './HomePage'

const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<MainProduct/>}/>
            <Route path="/product/:id" element={<Singleproductpage/>}/>
        </Routes>
      
   
  )
}

export default AllRoutes
