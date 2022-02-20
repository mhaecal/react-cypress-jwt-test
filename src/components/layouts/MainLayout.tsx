import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNavbar from '../TheNavbar'

function MainLayout() {
  return (
    <div>
      <TheNavbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
