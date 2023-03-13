import React from 'react'

function HeaderCarouselItem({ item, mainClass }) {
  return (
    <div className={mainClass}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-lg-none">
            <div className="slide_header"></div>
          </div>
          <div className="col-sm-12 col-lg-6 order-2 order-lg-1">
            <div className="slide_title text-center text-lg-left">
              <a href="#">
                <span className={item.spanClass1}>{item.spanText1}</span>
                <span className={item.spanClass2}>{item.spanText2}</span>
              </a>
            </div>
          </div>
          <div className="col-6 offset-3 offset-lg-0 col-lg-6 text-center order-1 order-lg-2">
            <img src={item.img} className="slide_img" alt={item.alt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCarouselItem