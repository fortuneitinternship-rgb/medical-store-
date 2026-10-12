import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import ComingSoon from '../pages/ComingSoon.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ComingSoon />} />
        <Route path="/products/:id" element={<ComingSoon />} />

        <Route path="/categories" element={<ComingSoon />} />
        <Route path="/cart" element={<ComingSoon />} />
        <Route path="/wishlist" element={<ComingSoon />} />

        <Route path="/login" element={<ComingSoon />} />
        <Route path="/register" element={<ComingSoon />} />
        <Route path="/checkout" element={<ComingSoon />} />

        <Route path="/offers" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />

        <Route path="/orders" element={<ComingSoon />} />
        <Route path="/profile" element={<ComingSoon />} />
        <Route path="/admin" element={<ComingSoon />} />

        <Route path="*" element={<ComingSoon />} />
      </Route>

      <Route
        path="/home"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  )
}