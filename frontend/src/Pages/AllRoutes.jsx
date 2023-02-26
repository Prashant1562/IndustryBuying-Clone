
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import UserLogin from './Login'
import Signup from './Signup'
import Singleproductpage from "../Components/SingleProductPage/singleproductpage"
import AdminSignup from './Admin/AdminSignup'
import Login from './Admin/AdminLogin'
import MainProduct from './MainProduct'
import AdminPage from '../Adminpage/adminpage'




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<MainProduct/>}/>
      <Route path="/product/:id" element={<Singleproductpage/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path='/admin/signup' element={<AdminSignup/>}/>
      <Route path='/admin/login' element={<Login/>}/>
      <Route path="/adminpage" element={<AdminPage/>}/>
    </Routes>
  )
};

export default AllRoutes;
