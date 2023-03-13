import React from "react";
import { useLocation } from "react-router-dom";
import HeaderPageTop from "./HeaderPageTop/HeaderPageTop";
import HeaderHomeCarousel from "./HeaderHomeCarousel/HeaderHomeCarousel";

function Header() {
  let { pathname } = useLocation();

  return (
    <header className="header">
      {
        pathname === "/" ?
          <HeaderHomeCarousel />
          :
          <HeaderPageTop path={pathname} />
      }
    </header>
  );
}

export default Header;
