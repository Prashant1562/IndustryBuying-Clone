import React from "react";
import { Route, Routes } from "react-router-dom";
import Singleproductpage from "../Components/SingleProductPage/singleproductpage";
import HomePage from "./HomePage";
import Login from "./Login";
import MainProduct from "./MainProduct";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<MainProduct/>} />
      <Route path="/product/:id" element={<Singleproductpage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
