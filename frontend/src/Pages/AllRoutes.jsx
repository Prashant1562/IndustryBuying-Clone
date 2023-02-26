import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../Adminpage/adminpage'
// import AdminAllProducts from './Admin/AdminAllProducts'
// import AdminDashboard from './Admin/AdminDashboard'
import AdminLogin from './Admin/AdminLogin'
import AdminPrivateRoutes from './Admin/AdminPrivateRoute'
import AdminSignup from './Admin/AdminSignup'
import CartPage from './CartPage'
import CheckoutPage from './CheckoutPage'
import DisplayAllProducts from './DisplayAllProducts'
import HomePage from './HomePage'
import MainProduct from './MainProduct'
import Payment from './Payment'
import PrivateRoutes from './PrivateRoutes'
//import Singleproductpages from './SingleProductPages'
import UserLogin from './User/UserLogin'
import UserSignup from './User/UserSignup'
import Singleproductpage from '../Components/SingleProductPage/singleproductpage'

const AllRoutes = () => {

  return (

   
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<MainProduct/>} />
            <Route path="/allproducts" element={<DisplayAllProducts/>} />
            <Route path="/product/:id" element={<Singleproductpage/>} />
            <Route path="/cart" element={<PrivateRoutes><CartPage/></PrivateRoutes>} />
            <Route path="/cart/checkout" element={<PrivateRoutes><CheckoutPage/></PrivateRoutes>} />
            <Route path="/payment" element={<PrivateRoutes><Payment/></PrivateRoutes>} />
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/signup" element={<UserSignup/>} />
            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/admin/signup" element={<AdminSignup/>} />
            {/* <Route path="/admin/dashboard" element={<AdminPrivateRoutes><AdminDashboard/></AdminPrivateRoutes>} /> */}
           {/* <Route path="/admin/allproducts" element={<AdminPrivateRoutes><AdminAllProducts/></AdminPrivateRoutes>} /> */}
           <Route path="admin/dashboard" element={<AdminPrivateRoutes><AdminPage/></AdminPrivateRoutes>} />
        </Routes>
      
   
  )
}

export default AllRoutes;
