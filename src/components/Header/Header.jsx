import React from "react";
import { headerCarouselItemsInitialData } from "../../utils/initialData";
import HeaderCarouselItem from "./HeaderCarouselItem/HeaderCarouselItem";

function Header() {
  return (
    <header className="header">
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            headerCarouselItemsInitialData.map((item) => (
              <HeaderCarouselItem key={item.id} item={item} />
            ))
          }
          <div className="container position-absolute header-form">
            <div className="col col-lg-6 d-flex flex-column flex-lg-row align-items-center">
              <div className="row header-phone">
                <a href="tel:+74957777777" className="text-white text-decoration-none">
                  <span>+7(495)777-77-77</span>
                </a>
              </div>
              <button type="button" className="btn btn-outline-light mx-3 my-3 rounded-4">
                Заказать звонок
              </button>
            </div>
            <div className="d-none d-lg-block col-lg-6">
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-6 d-none d-lg-block">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
