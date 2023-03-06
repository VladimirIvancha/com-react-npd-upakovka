import React from 'react'
import { homeOurAdvantageItemInitialData, servicesItemsInitialData } from '../../utils/initialData'
import AboutPortfolioSwiper from '../About/AboutPortfolioSwiper/AboutPortfolioSwiper'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import HomeOurAdvantagesItem from '../Home/HomeOurAdvantagesItem/HomeOurAdvantagesItem'
import ServiceItem from './ServiceItem/ServiceItem'

function Services() {
  return (
    <section className="services" id='services'>
      <div className="container">

        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2 className="products-title fw-bold">Услуги</h2>
          </div>
        </div>

        <div className="row mt-4">
          {servicesItemsInitialData.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center mt-5">
          <div className="fs-2 fw-bold">
            Наши преимущества
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {homeOurAdvantageItemInitialData.map((item) => (
          <HomeOurAdvantagesItem key={item.id} item={item} />
        ))}
      </div>

      <FeedbackForm />

      <div className="container about-portfolio mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <div className="fs-2 fw-bold">Портфолио</div>
          </div>
        </div>
        <div className="row mt-3">
          <AboutPortfolioSwiper />
        </div>
      </div>
    </section>
  )
}

export default Services