import React from 'react'
import { homeOurAdvantageItemInitialData, homeOurSpecialityItemInitialData, homeReadyItemInitialData, homeReasonItemInitialData } from '../../utils/initialData'
import AboutPortfolioSwiper from '../About/AboutPortfolioSwiper/AboutPortfolioSwiper'
import HomeOurAdvantagesItem from './HomeOurAdvantagesItem/HomeOurAdvantagesItem'
import HomeOurSpecialityItem from './HomeOurSpecialityItem/HomeOurSpecialityItem'
import HomeReadyItem from './HomeReadyItem/HomeReadyItem'
import HomeReasonItem from './HomeReasonItem/HomeReasonItem'

function Home() {
  return (
    <section className="home container">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1 className="fw-bold">Компания <span>NPD-упаковка</span></h1>
          </div>
        </div>
        <div className="col-12  mt-5">
          <p>Арбат – это крупная офсетная типография в Москве. Мы предоставляем типографские услуги – офсетная УФ-печать, офсетная печать А1 формата, изготовление упаковки, металлизация, тиснение и другие. Наш парк оборудования внушителен даже по меркам московских типографий. Все этапы производства полиграфической продукции выполняем самостоятельно на собственном оборудовании. Это позволяет успешно взаимодействовать с самыми взыскательными заказчиками и действительно сложными проектами. Вам нужны большие тиражи в короткие сроки и гарантированно высокое качество печатной продукции? Типография Арбат – то, что вам нужно.</p>

          <div className="row">
            <div className="col-12 text-center mt-5">
              <div className="fs-2 fw-bold">
                Наша главная специализация:
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {homeOurSpecialityItemInitialData.map((item) => (
              <HomeOurSpecialityItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center mt-5">
            <div className="fs-2 fw-bold">
              Готовые решения
            </div>
          </div>
        </div>
        <div className="row">
          <div className="links col-12 text-center mt-5 fs-5">
            <a href="#karton" className="active">Упаковка из картона</a> <a href="#rekl">Рекламная полиграфия</a> <a href="#pechat">Календари</a> <a href="#posmat">POS материалы</a>
          </div>
        </div>
        <div className="row">
          {homeReadyItemInitialData.map((item) => (
            <HomeReadyItem key={item.id} item={item} />
          ))}
        </div>

        <div className="reasons">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mt-5">
                <div className="fs-2 fw-bold">
                  Причина работать с нами
                </div>
              </div>
            </div>
            <div className="row g-4 mt-5">
              {homeReasonItemInitialData.map((item) => (
                <HomeReasonItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="container about-portfolio mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <div className="fs-2 fw-bold">Портфолио</div>
            </div>
          </div>
          <div className="row mt-5">
            <AboutPortfolioSwiper />
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

        <div className="row">
          <div className="col-12 text-center mt-5">
            <div className="fs-2 fw-bold">
              Видео о типографии
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home