import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav className='container bg-info'>
        <ul className="list-unstyled list-inline d-flex justify-content-between py-2">
          <li className="list-inline-item">
            <Link className="text-dark text-decoration-none fs-5" to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-dark text-decoration-none fs-5" to="/about">About</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-dark text-decoration-none fs-5" to="/dashboard">Dashboard</Link>
          </li>
          <li className="list-inline-item">
            <Link className="text-dark text-decoration-none fs-5" to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr className='layout__hr'/>
      <Outlet />
    </div>
  )
}

export default Layout