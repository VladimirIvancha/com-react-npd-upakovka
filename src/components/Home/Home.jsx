import React from 'react'
import { homepic1, homepic2, homepic3, homepic4 } from '../../utils/initialData'

function Home() {
  return (
    <section className="container">
      <div className="container">
        <div className="row">
          <div className="col-12 block_header monserrat-bold text-center my-5">
            <h1>Компания <span>NPD-упаковка</span></h1>
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
          <div className="col-12 block_header monserrat-bold text-center">
            <div className="h2">
              Готовые решения
            </div>
          </div>
        </div>
        <div className="row">
          <div className="links col-12 text-center">
            <a href="#karton" className="active">Упаковка из картона</a> <a href="#rekl">Рекламная полиграфия</a> <a href="#biznes">Бизнес-полиграфия</a> <a href="#pechat">Календари</a> <a href="#posmat">POS материалы</a>
          </div>
        </div>
        <div className="row items karton show">

          <div className="item_wrapper  col-sm-12 col-md-4 col-lg-6">
            <div className="decision_item" id="upak1">
              <div className="item_img"><img src="/upload/resize_cache/webp/iblock/f7e/1.webp" alt="" /></div>
              <div className="item_header">Коробка «Коньячная»</div>
              <div className="item_descr">
                Коробка с самосборным дном.<br />
                Размер&nbsp;200х90х260 мм<br />
                Красочность: 4+0<br />
                Кашированный на микрогофру картон<br />
                Тираж: 5000 экз.
              </div>
            </div>
            <div className="decision_item hover banner">
              <div className="block_header text-white float-lg-left monserrat-bold font24 col-12 col-lg-6">Коробка «Коньячная»</div>
              <div className="toggle monserrat-bold float-lg-right text-white" data-toggle="modal" data-target="#myModal2" onclick="modalgot('upak1');">Заказать</div>

            </div>
          </div>


          <div className="item_wrapper  col-sm-12 col-md-4 col-lg-6">
            <div className="decision_item" id="upak2">
              <div className="item_img"><img src="/upload/resize_cache/webp/iblock/5b3/4.webp" alt="" /></div>
              <div className="item_header">Коробка «Лекарственная»</div>
              <div className="item_descr">
                Коробка клеевая на 1 точку<br />
                Размер 42х20х102 мм&nbsp;&nbsp;<br />
                Красочность: 4+0 <br />
                Картон 1-стороннего мелования 250 г/м2<br />
                Тираж: 10000 экз.
              </div>
            </div>
            <div className="decision_item hover banner">
              <div className="block_header text-white float-lg-left monserrat-bold font24 col-12 col-lg-6">Коробка «Лекарственная»</div>
              <div className="toggle monserrat-bold float-lg-right text-white" data-toggle="modal" data-target="#myModal2" onclick="modalgot('upak2');">Заказать</div>

            </div>
          </div>


          <div className="item_wrapper  col-sm-12 col-md-4 col-lg-6">
            <div className="decision_item" id="upak3">
              <div className="item_img"><img src="/upload/resize_cache/webp/iblock/f03/monoblock.webp" alt="" /></div>
              <div className="item_header">Коробка «Моноблок»</div>
              <div className="item_descr">
                Коробка клеевая на 5 точек <br />
                Размер 205х145х25 мм <br />
                Красочность: 4+0 <br />
                Картон 1-стороннего мелования 300 г/м2 <br />
                Тираж: 5000 экз.
              </div>
            </div>
            <div className="decision_item hover banner">
              <div className="block_header text-white float-lg-left monserrat-bold font24 col-12 col-lg-6">Коробка «Моноблок»</div>
              <div className="toggle monserrat-bold float-lg-right text-white" data-toggle="modal" data-target="#myModal2" onclick="modalgot('upak3');">Заказать</div>

            </div>
          </div>


          <div className="item_wrapper  col-sm-12 col-md-4 col-lg-6">
            <div className="decision_item" id="upak4">
              <div className="item_img"><img src="/upload/resize_cache/webp/iblock/c9c/5.webp" alt="" /></div>
              <div className="item_header">Коробка  «Шоу-бокс»</div>
              <div className="item_descr">
                Коробка клеевая на 3 точки<br />
                Размер 114х75х44 мм&nbsp;&nbsp;<br />
                Красочность: 4+0 <br />
                Картон 1-стороннего мелования 250 г/м2<br />
                Тираж: 5000 экз.
              </div>
            </div>
            <div className="decision_item hover banner">
              <div className="block_header text-white float-lg-left monserrat-bold font24 col-12 col-lg-6">Коробка  «Шоу-бокс»</div>
              <div className="toggle monserrat-bold float-lg-right text-white" data-toggle="modal" data-target="#myModal2" onclick="modalgot('upak4');">Заказать</div>

            </div>
          </div>


          <div className="item_wrapper  col-sm-12 col-md-4 col-lg-6">
            <div className="decision_item" id="upak5">
              <div className="item_img"><img src="/upload/resize_cache/webp/iblock/032/3.webp" alt="" /></div>
              <div className="item_header">Коробка  «Кондитерская»</div>
              <div className="item_descr">
                Коробка клеевая на 6 точек<br />
                Размер 210х250х55 мм с крышкой <br />
                Красочность: 4+0<br />
                Картон 1-стороннего мелования 300 г/м2<br />
                Тираж: 5000 экз.<br />

              </div>

            </div>
            <div className="decision_item hover banner">
              <div className="block_header text-white float-lg-left monserrat-bold font24 col-12 col-lg-6">Коробка  «Кондитерская»</div>
              <div className="toggle monserrat-bold float-lg-right text-white" data-toggle="modal" data-target="#myModal2" onclick="modalgot('upak5');">Заказать</div>

            </div>
          </div>


          <div className="item_wrapper  col-sm-12 col-md-4 col-lg-6">
            <div className="decision_item" id="upak6">
              <div className="item_img"><img src="/upload/resize_cache/webp/iblock/6bc/korobkaruchka.webp" alt="" /></div>
              <div className="item_header">Коробка-пакет</div>
              <div className="item_descr">
                Коробка клеевая на 3 точки<br />
                Размер 150х80х250 мм <br />
                Красочность: 4+0 <br />
                Картон 1-стороннего мелования 250 г/м2<br />
                Тираж: 5000 экз.
              </div>

            </div>
            <div className="decision_item hover banner">
              <div className="block_header text-white float-lg-left monserrat-bold font24 col-12 col-lg-6">Коробка-пакет</div>
              <div className="toggle monserrat-bold float-lg-right text-white" data-toggle="modal" data-target="#myModal2" onclick="modalgot('upak6');">Заказать</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home