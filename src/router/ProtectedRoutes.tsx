import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
  const hasToken: boolean = !!localStorage.getItem('user')
  if (hasToken) {
    return <Outlet />
  } else {
    return <Navigate replace to="/login" />
  }
}

export default ProtectedRoutes
