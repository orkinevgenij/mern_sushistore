import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
