import React from 'react'
import { homeOurAdvantageItemInitialData, productsItemsInitialData, skrepka } from '../../utils/initialData'
import AboutPortfolioSwiper from '../About/AboutPortfolioSwiper/AboutPortfolioSwiper'
import HomeOurAdvantagesItem from '../Home/HomeOurAdvantagesItem/HomeOurAdvantagesItem'
import ProductsItem from './ProductsItem/ProductsItem'

function Products() {
  function handleClick() {
    return
  }

  return (
    <section className="products">
      <div className="container">

        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2 className="products-title fw-bold">Продукция</h2>
          </div>
        </div>
        <div className="row  mt-4">
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

      <div className="contactform feedbackform mt-5">
        <div className="container">

          <div className="row">
            <div className="col-sm-12">
              <div className="text-white text-center text-lg-start fs-3">Форма обратной связи</div>

              <div className="form-wrapper text-center text-lg-start">
                <form>
                  <div className="row">
                    <div className="col-10 offset-1 col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
                      <input className="edit" id="namebigf" placeholder="Введите Ваше имя" />
                      <input className="edit" id="mailbigf" placeholder="Введите Вашу почту" />
                      <input type="tel" id="phonebigf" className="edit" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="col-10 offset-1 col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 textarea_wrapper">
                      <textarea className="edit" id="textbigf" placeholder="Ваш запрос"></textarea>
                    </div>
                    <div className="col-10 offset-1 col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
                      <div className="form-group text-start mb-3">
                        <label htmlFor="exampleFormControlFile1" className="text-white mb-2">
                          <img src={skrepka} alt="" />&nbsp;Прикрепите Ваш файл</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                      </div>

                      <div className="form-check text-start">
                        <input className="form-check-input" type="checkbox" defaultChecked="" value="" id="defaultCheck1" onClick={handleClick} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                          <span className="text-white fs-6">Я согласен с <a href="/politika-konfidentsialnosti/" className="text-white">Политикой конфиденциальности</a></span>
                        </label>
                      </div>

                      <input type="submit" className="toggle" id="formzakbigf" value="Отправить заявку" onClick={handleClick} />
                    </div>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>

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

export default Products