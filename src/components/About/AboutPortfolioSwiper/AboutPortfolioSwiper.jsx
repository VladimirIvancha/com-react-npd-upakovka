import React from "react";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AboutPortfolioSwiperCard from "./AboutPortfolioSwiperCard/AboutPortfolioSwiperCard";
import { aboutPortfolioSwiperInitialData } from "../../../utils/initialData";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/virtual";

function AboutPortfolioSwiper() {
  const slides = aboutPortfolioSwiperInitialData.map((item) => (
    <AboutPortfolioSwiperCard key={item.name} item={item} />
  ));

  return (
    <div className="portfolioSliderCards">
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="slide-content">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className="slide-container swiper"
        >
          <div className="card-wrapper swiper-wrapper">
            {slides.map((slideContent, index) => (
              <SwiperSlide key={index}>{slideContent}</SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <div className="swiper-button-next swiper-navBtn"></div>
    </div>
  );
}

export default AboutPortfolioSwiper;
