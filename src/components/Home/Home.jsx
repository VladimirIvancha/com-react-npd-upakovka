import React from 'react'
import { homepic1, homepic2, homepic3, homepic4, upak1 } from '../../utils/initialData'

function Home() {
  return (
    <section className="home container">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1 className="fw-bold">Компания <span>NPD-упаковка</span></h1>
          </div>
        </div>
        <div className="col-12">
          <p>Арбат – это крупная офсетная типография в Москве. Мы предоставляем типографские услуги – офсетная УФ-печать, офсетная печать А1 формата, изготовление упаковки, металлизация, тиснение и другие. Наш парк оборудования внушителен даже по меркам московских типографий. Все этапы производства полиграфической продукции выполняем самостоятельно на собственном оборудовании. Это позволяет успешно взаимодействовать с самыми взыскательными заказчиками и действительно сложными проектами. Вам нужны большие тиражи в короткие сроки и гарантированно высокое качество печатной продукции? Типография Арбат – то, что вам нужно.</p>
          <p className='mt-4'>
            Наша главная специализация:
          </p>
          <div className="row">
            <div className="col-6 col-sm-3 productitem">
              <div className="productitem_title text-center">
                <a href="/uslugi/pechat-na-plastike/">ПЕЧАТЬ НА ПЛАСТИКЕ</a>
              </div>
              <div className="productitem_image mb-5" >
                <div>
                  <img alt="ПЕЧАТЬ НА ПЛАСТИКЕ" src={homepic1} /><br />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3 productitem">
              <div className="productitem_title text-center">
                <a href="/uslugi/uf-pechat/">Офсетная уф печать</a>
              </div>
              <div className="productitem_image mb-5">
                <div>
                  <img alt="Офсетная уф печать" src={homepic2} /><br />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3 productitem">
              <div className="productitem_title text-center">
                <a href="/produktsiya/upakovka/">ИЗГОТОВЛЕНИЕ УПАКОВКИ</a>
              </div>
              <div className="productitem_image mb-5" >
                <div>
                  <img alt="ИЗГОТОВЛЕНИЕ УПАКОВКИ" src={homepic3} /><br />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3 productitem">
              <div className="productitem_title text-center">
                <a href="/uslugi/pechat-na-plenke/">Печать на пленке</a>
              </div>
              <div className="productitem_image mb-5">
                <div>
                  <img alt="Печать на пленке" src={homepic4} /><br />
                </div>
              </div>
            </div>
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
          <div className="links col-12 text-center my-5 fs-5">
            <a href="#karton" className="active">Упаковка из картона</a> <a href="#rekl">Рекламная полиграфия</a> <a href="#pechat">Календари</a> <a href="#posmat">POS материалы</a>
          </div>
        </div>

        <div className="row">

          <div className="col-12 col-lg-6">
            <div className="col item-wrapper">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4 d-flex justify-content-center m-auto">
                    <img src={upak1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title home-title">Коробка «Коньячная»</h5>
                      <p className="card-text home-text">Коробка с самосборным дном.<br />
                        Размер&nbsp;200х90х260 мм<br />
                        Красочность: 4+0<br />
                        Кашированный на микрогофру картон<br />
                      </p>
                      <p className="card-text home-text"><small>Тираж: 5000 экз.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="col item-wrapper">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4 d-flex justify-content-center m-auto">
                    <img src={upak1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">Коробка «Лекарственная»</h5>
                      <p className="card-text">Коробка клеевая на 1 точку<br />
                        Размер 42х20х102 мм&nbsp;&nbsp;<br />
                        Красочность: 4+0 <br />
                        Картон 1-стороннего мелования 250 г/м2<br />
                      </p>
                      <p className="card-text"><small>Тираж: 10000 экз.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="col item-wrapper">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4 d-flex justify-content-center m-auto">
                    <img src={upak1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">Коробка «Коньячная»</h5>
                      <p className="card-text">Коробка с самосборным дном.<br />
                        Размер&nbsp;200х90х260 мм<br />
                        Красочность: 4+0<br />
                        Кашированный на микрогофру картон<br />
                      </p>
                      <p className="card-text"><small>Тираж: 5000 экз.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="col item-wrapper">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4 d-flex justify-content-center m-auto">
                    <img src={upak1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">Коробка «Лекарственная»</h5>
                      <p className="card-text">Коробка клеевая на 1 точку<br />
                        Размер 42х20х102 мм&nbsp;&nbsp;<br />
                        Красочность: 4+0 <br />
                        Картон 1-стороннего мелования 250 г/м2<br />
                      </p>
                      <p className="card-text"><small>Тираж: 10000 экз.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

            <div className="row g-4 my-5">
              <div className="col-12 col-sm-6 mb-3">
                <div className="row reason1">
                  <div className="col-2 col-sm-2">
                    <div className="home-img mx-auto"></div>
                  </div>

                  <h3 className="reason-title col-10 text-start" >Быстро</h3>

                  <div className="reason_descr col-12">
                    Ответим на запрос в течение 20 мин.<br />
                    Предоставим стоимость в течение 3 часов.<br />
                    Изготовим тираж за 5 дней.
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <div className="row reason2">

                  <div className="col-2">
                    <div className="home-img mx-auto"></div>
                  </div>

                  <h3 className="reason-title col-10 text-start"  >Под ключ</h3>

                  <div className="reason_descr col-12">
                    Разработаем макет. Сделаем тестовый образец конструкции. Напечатаем и обработаем. Упакуем и доставим.
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <div className="row reason3">

                  <div className="col-2">
                    <div className="home-img mx-auto"></div>
                  </div>

                  <h3 className="reason-title col-10 text-start"  >Доставка - 0р</h3>

                  <div className="reason_descr col-12">
                    Доставляем бесплатно тиражи в будни в пределах МКАД, если вес тиража составляет 1500 кг.
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <div className="row reason4">

                  <div className="col-2">
                    <div className="home-img mx-auto"></div>
                  </div>

                  <h3 className="reason-title col-10 text-start"  >Качество - 100%</h3>

                  <div className="reason_descr col-12">
                    Многоуровневая система контроля качества позволяет нам безупречно выполнять свою работу.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home