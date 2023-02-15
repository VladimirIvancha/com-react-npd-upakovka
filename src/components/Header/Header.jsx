import React from "react";
import { Link } from "react-router-dom";

import pic1 from '../../assets/images/pos1-min.webp'
import pic2 from '../../assets/images/tea1-min.webp'
import pic3 from '../../assets/images/uf1-min.webp'


function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary py-0">
        <div className="container-fluid bg-primary bg-gradient">
          <a className="nav-link active text-light fs-3" href="#">
            NPD-упаковка
          </a>
          <button
            className="navbar-toggler text-light fs-4 border-0"
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
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-4"
                  aria-current="page"
                  to="/"
                >
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-4" to="/about">
                  О нас
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-4" to="/dashboard">
                  Продукция
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-4"
                  aria-current="page"
                  to="/"
                >
                  Услуги
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-4"
                  aria-current="page"
                  to="/"
                >
                  Контакты
                </Link>
              </li>
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
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item bg-warning header-carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-lg-none">
                  <div className="slide_header"></div>
                </div>
                <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
                  <div className="slide_title text-center text-lg-left">
                    <a href="#">
                      <span className="red">POS-</span>
                      <span className="darks">материалы</span>
                    </a>
                  </div>
                </div>
                <div className="col-6 offset-3 offset-lg-0 col-lg-6 text-center order-1 order-lg-2">
                  <img src={pic1} className="slide_img" alt="1" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-success header-carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-lg-none">
                  <div className="slide_header"></div>
                </div>
                <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
                  <div className="slide_title text-center text-lg-left">
                    <a href="#">
                      Печать
                      <span className="green"> упаковки</span>
                    </a>
                  </div>
                </div>
                <div className="col-6 offset-3 offset-lg-0 col-lg-6 text-center order-1 order-lg-2">
                  <img src={pic2} className="slide_img" alt="2" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item bg-danger header-carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-lg-none">
                  <div className="slide_header"></div>
                </div>
                <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
                  <div className="slide_title text-center text-lg-left">
                    <a href="#">
                      <span className="yellow">UF-</span>
                      печать
                    </a>
                  </div>
                </div>
                <div className="col-6 offset-3 offset-lg-0 col-lg-6 text-center order-1 order-lg-2">
                  <img src={pic3} className="slide_img" alt="3" />
                </div>
              </div>
            </div>
          </div>
          <div className="row position-absolute header-form">
            <div className="header-phone">
              <a href="tel:+74957777777" className="text-white text-decoration-none">
                <span>+7(495)777-77-77</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container">

        </div>
        <div className="container">

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
