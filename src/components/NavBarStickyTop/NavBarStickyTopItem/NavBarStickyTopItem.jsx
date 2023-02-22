import React from 'react'
import { Link } from 'react-router-dom'

function NavBarStickyTopItem({item}) {
  return (
    <li className="nav-item">
      <Link
        className="nav-link active text-light fs-4"
        aria-current="page"
        to={item.link}
      >
        {item.title}
      </Link>
    </li>
  )
}

export default NavBarStickyTopItem