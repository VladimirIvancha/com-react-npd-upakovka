import React from 'react'
import { headerPageTopItemsInitialData } from '../../../utils/initialData'
import HeaderCarouselItem from '../HeaderCarouselItem/HeaderCarouselItem'

function HeaderPageTop({ path }) {
  return (
    <div>
      <div className="carousel-inner">
        {console.log(path)}
        {
          headerPageTopItemsInitialData.map((item) =>
          (item.name === path &&
            <HeaderCarouselItem key={item.id} item={item} mainClass={item.mainClass} />
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
    </div>
  )
}

export default HeaderPageTop