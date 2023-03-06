import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarStickyTopItem({ item, setOpen }) {
  
  function handleNavbarClose() {
    setOpen(false);
  }

  return (
    <li className="nav-item">
      <NavLink
        className="nav-link text-light fs-4"
        aria-current="page"
        to={item.link}
        onClick={handleNavbarClose}
      >
        {item.title}
      </NavLink>
    </li>
  )
}

export default NavBarStickyTopItem