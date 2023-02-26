
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import UserLogin from './Login'
import Signup from './Signup'

// import MainProduct from "../Components/Products/MainProduct"
// import Singleproductpage from "../Components/SingleProductPage/singleproductpage"
import AdminSignup from './Admin/AdminSignup'
import Login from './Admin/AdminLogin'





const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path='/admin/signup' element={<AdminSignup/>}/>
      <Route path='/admin/login' element={<Login/>}/>
    </Routes>
  )
};

export default AllRoutes;
