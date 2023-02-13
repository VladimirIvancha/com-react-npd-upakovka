import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout