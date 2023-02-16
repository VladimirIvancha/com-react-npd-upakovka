import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBarStickyTop from '../NavBarStickyTop/NavBarStickyTop'

function Layout() {
  return (
    <section>
      <NavBarStickyTop />
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout