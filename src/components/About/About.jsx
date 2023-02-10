import React from "react";

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
            <div className="row">
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
            <div className="row my-4">
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
            <div className="col-12 text-center  mt-5">
              <div className="fs-4 fw-bold">Наши сертификаты</div>
            </div>
          </div>
          <div className="container my-5 mx-auto text-center">
            <div className="row">
              <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-between">
                <div className="row">
                  <h3 className="fs-4">
                    Сертификат соответствия ISO 22000:2018
                  </h3>
                  <div className="icon mx-auto">
                    <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
                  </div>
                </div>
                <a className="btn btn-success my-4 col-4 mx-auto" href="#" target="_blank">
                  Скачать
                </a>
              </div>
              <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-between">
                <div className="row">
                  <h3 className="fs-4">
                    Декларация о соответствии требованиям технического
                    регламента таможенного союза «О безопасности упаковки»
                  </h3>
                  <div className="icon mx-auto">
                    <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
                  </div>
                </div>
                <a className="btn btn-success my-4 col-4 mx-auto" href="#" target="_blank">
                  Скачать
                </a>
              </div>
              <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-between">
                <div className="row">
                  <h3 className="fs-4">
                    Сертификат соответствия ISO 22000:2005
                  </h3>
                  <div className="icon mx-auto">
                    <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
                  </div>
                </div>
                <a className="btn btn-success my-4 col-4 mx-auto" href="#" target="_blank">
                  Скачать
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
