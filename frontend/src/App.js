import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Registration';
import Login from './Login';
import Forgetpasswrod from './Forgetpasswrod';
import Adduser from './Adduser';
import Sidebar from './Sidebar';
import Catalog from './catalog';
import Category from './category';
import Color from './color';
import Products from './Products';
import Dashboard from './Dashbord';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="forgetpassword" element={<Forgetpasswrod />} />
          <Route path="adduser" element={<Adduser />} />
          <Route path="s" element={<Sidebar />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="category" element={<Category />} />
          <Route path="color" element={<Color />} />
          <Route path="products" element={<Products />} />
          <Route path="d" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

