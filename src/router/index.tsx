import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import App from '../App'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
