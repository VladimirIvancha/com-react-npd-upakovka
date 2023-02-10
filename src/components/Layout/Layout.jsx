import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function Layout() {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  )
}

export default Layout