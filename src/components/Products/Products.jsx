import React from 'react'
import { homeOurAdvantageItemInitialData, productsItemsInitialData, skrepka } from '../../utils/initialData'
import AboutPortfolioSwiper from '../About/AboutPortfolioSwiper/AboutPortfolioSwiper'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import HomeOurAdvantagesItem from '../Home/HomeOurAdvantagesItem/HomeOurAdvantagesItem'
import ProductsItem from './ProductsItem/ProductsItem'

function Products() {

  return (
    <section className="products" id='products'>
      <div className="container">

        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2 className="products-title fw-bold">Продукция</h2>
          </div>
        </div>
        <div className="row mt-4">
          {productsItemsInitialData.map((item) => (
            <ProductsItem key={item.id} item={item} />
          ))}
          <p className='my-3'>У нас вы можете заказать разнообразную полиграфическую продукцию. Работая с большими тиражами компания "NPD-упаковка" предлагает своим клиентам очень низкие цены не снижая планку качества. Воспользуйтесь формой связи или позвоните нам по телефону, чтобы заказать качественную и эффектную полиграфию!</p>
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

      </div>

      <FeedbackForm />

      <div className="container about-portfolio my-5">
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

export default Products