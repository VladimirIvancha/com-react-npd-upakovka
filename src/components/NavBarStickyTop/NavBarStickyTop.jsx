import React from 'react'
import { navBarStickyTopItemsInitialData } from '../../utils/initialData';
import NavBarStickyTopItem from './NavBarStickyTopItem/NavBarStickyTopItem';

function NavBarStickyTop() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-primary py-0">
      <div className="container-fluid bg-primary bg-gradient">
        <a className="nav-link active text-light fs-3" href="#">
          NPD-упаковка
        </a>
        <button
          className="navbar-toggler text-light fs-2 border-0 m-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 container justify-content-center">
            {navBarStickyTopItemsInitialData.map((item) => (
              <NavBarStickyTopItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="d-inline-flex p-2">
            <a className="fs-4 px-1 text-light" href="#" target="_blank">
              <i className="fa-brands fa-vk"></i>
            </a>
            <a className="fs-4 px-1 text-light" href="#" target="_blank">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a className="fs-4 px-1 text-light" href="#" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBarStickyTop