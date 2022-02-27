import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from '../App'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductList from '../pages/ProductList'
import ProductItem from '../pages/ProductItem'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductItem />} />
          </Route>
          <Route element={<App />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
