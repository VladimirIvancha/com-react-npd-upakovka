import React from "react";

function AboutPortfolioSwiperCard({ item }) {
  return (
    <div className="card swiper-slide" id={item.id}>
      <div className="image-content">
        <span className="overlay"></span>
        <div className="card-image">
          <img src={item.photo} alt={item.name} className="card-img" />
        </div>
      </div>
      <div className="card-content">
        <h2 className="name">{item.name}</h2>
        <button className="button">View More</button>
      </div>
    </div>
  );
}

export default AboutPortfolioSwiperCard;
