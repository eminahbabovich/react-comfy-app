import React from 'react'
import { Navbar, Sidebar, Footer } from '../components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}
export default HomeLayout
