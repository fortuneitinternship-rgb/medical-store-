import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";

import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";
import Wishlist from "../pages/Wishlist.jsx";
import ComingSoon from "../pages/ComingSoon.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<ComingSoon />} />
        <Route path="contact" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;