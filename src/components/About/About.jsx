import React from "react";
import TabPaneItem from "./TabPaneItem/TabPaneItem";

import photo1 from "../../assets/images/alco_2-min.webp";
import photo2 from "../../assets/images/Babaevskiy_packaging-min.webp";
import photo3 from "../../assets/images/DesignDepot_2_calendar.webp";

function About() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="text-start col-12 fs-5 my-5">
              «NPD-упаковка» - крупная типография европейского уровня
              обслуживания и надежный партнер вашего бизнеса. Предоставляем
              каждому клиенту лучшие полиграфические решения, путем внедрения
              передовых технологий полиграфии и самых высоких стандартов
              качества. Мы типография полного производственного цикла. У нас
              лучшее специализированное программное обеспечение, современное
              высокотехнологичное оборудование. Наша типография является
              официальным партнером компаний КБА и Гейдельберг.
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="fs-4 fw-bold">Наши приоритетные направления</div>
            </div>
          </div>
          <div className="container my-5 mx-auto text-center">
            <div className="row my-4">
              <div className="col">
                <div className="border bg-primary fs-1 rounded">
                  <a
                    className="text-decoration-none text-reset"
                    href="#"
                    target="_blank"
                  >
                    <i className="fa-sharp fa-solid fa-gears"></i>
                    <p className="text-center fs-4">Производим</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="border bg-success fs-1 rounded">
                  <a
                    className="text-decoration-none text-reset"
                    href="#"
                    target="_blank"
                  >
                    <i className="fa-solid fa-wrench"></i>
                    <p className="text-center fs-4">Формуем</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col">
                <div className="border bg-danger fs-1 rounded">
                  <a
                    className="text-decoration-none text-reset"
                    href="#"
                    target="_blank"
                  >
                    <i className="fa-sharp fa-solid fa-hammer"></i>
                    <p className="text-center fs-4">Вырубаем</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="border bg-warning fs-1 rounded">
                  <a
                    className="text-decoration-none text-reset"
                    href="#"
                    target="_blank"
                  >
                    <i className="fa-solid fa-screwdriver"></i>
                    <p className="text-center fs-4">Печатаем</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="border bg-info fs-1 rounded">
                  <a
                    className="text-decoration-none text-reset"
                    href="#"
                    target="_blank"
                  >
                    <i className="fa-solid fa-toolbox"></i>
                    <p className="text-center fs-4">Упаковываем</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-5">
              <div className="fs-4 fw-bold">Наши сертификаты</div>
            </div>
          </div>
          <div className="container my-5 mx-auto text-center">
            <div className="row">
              <div className="col-12 col-lg-4 text-center d-flex flex-column justify-content-between">
                <div className="row">
                  <h3 className="fs-4">
                    Сертификат соответствия ISO 22000:2018
                  </h3>
                  <div className="icon mx-auto">
                    <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
                  </div>
                </div>
                <a
                  className="btn btn-success my-4 col-4 mx-auto"
                  href="#"
                  target="_blank"
                >
                  Скачать
                </a>
              </div>
              <div className="col-12 col-lg-4 text-center d-flex flex-column justify-content-between">
                <div className="row">
                  <h3 className="fs-4">
                    Декларация о соответствии требованиям технического
                    регламента таможенного союза «О безопасности упаковки»
                  </h3>
                  <div className="icon mx-auto">
                    <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
                  </div>
                </div>
                <a
                  className="btn btn-success my-4 col-4 mx-auto"
                  href="#"
                  target="_blank"
                >
                  Скачать
                </a>
              </div>
              <div className="col-12 col-lg-4 text-center d-flex flex-column justify-content-between">
                <div className="row">
                  <h3 className="fs-4">
                    Сертификат соответствия ISO 22000:2005
                  </h3>
                  <div className="icon mx-auto">
                    <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
                  </div>
                </div>
                <a
                  className="btn btn-success my-4 col-4 mx-auto"
                  href="#"
                  target="_blank"
                >
                  Скачать
                </a>
              </div>
            </div>
          </div>
          <div className="container about-tabs full-size d-none d-lg-block my-5">
            <div className="row">
              <div className="col-12 text-center mt-5">
                <div className="fs-4 fw-bold">Наше оборудование</div>
              </div>
            </div>
            <div className="row">
              <ul className="nav justify-content-center my-5">
                <li className="nav-item">
                  <a
                    className="nav-link active fs-5"
                    aria-current="page"
                    href="#"
                  >
                    Все
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Допечатное оборудование
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Печатное оборудование
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Послепечатное оборудование
                  </a>
                </li>
              </ul>
            </div>
            <div className="row full-size">
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  role="tabpanel"
                  id="tab-pane-all"
                >
                  <div className="row gy-4">
                    {[1, 2, 3].map((item) => (
                      <TabPaneItem key={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container about-tabs mob-size d-lg-none my-5">
            <div className="row">
              <div className="col-12 text-center mt-5">
                <div className="fs-4 fw-bold">Наше оборудование</div>
              </div>
            </div>
            <div className="row">
              <ul
                className="nav justify-content-center my-5 d-block text-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active fs-5"
                    aria-current="page"
                    href="#"
                  >
                    Все
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Допечатное оборудование
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Печатное оборудование
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">
                    Послепечатное оборудование
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane active"
              role="tabpanel"
              id="tab-pane-all-mob"
            >
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <TabPaneItem />
                  </div>
                  <div className="carousel-item">
                    <TabPaneItem />
                  </div>
                  <div className="carousel-item">
                    <TabPaneItem />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="container about-portfolio my-5">
            <div className="row">
              <div className="col-12 text-center mt-5">
                <div className="fs-2 fw-bold">Портфолио</div>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-6 mx-auto">
              <div
                id="carouselExampleIndicators"
                className="carousel slide my-4"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={photo1} className="d-block w-100" alt="Фото1" />
                  </div>
                  <div className="carousel-item">
                    <img src={photo2} className="d-block w-100" alt="Фото2" />
                  </div>
                  <div className="carousel-item">
                    <img src={photo3} className="d-block w-100" alt="Фото3" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
