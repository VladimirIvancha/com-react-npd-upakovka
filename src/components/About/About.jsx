import React from "react";
import TabPaneItem from "./TabPaneItem/TabPaneItem";

import AboutPortfolioSwiper from "./AboutPortfolioSwiper/AboutPortfolioSwiper";
import {
  aboutDocsInitialData,
  aboutIntroText,
  aboutOurMachinesLinksInitialData,
  tabPaneInitialData,
} from "../../utils/initialData";
import AboutDocsItem from "./AboutDocsItem/AboutDocsItem";
import AboutActivityItem from "./AboutActivityItem/AboutActivityItem";
import AboutOurMachinesLink from "./AboutActivityItem/AboutOurMachinesLink/AboutOurMachinesLink";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2 className="about-title fw-bold">О нас</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="text-start col-12 fs-5 my-5">{aboutIntroText}</div>
            </div>
            <div className="row">
              <div className="col-12 text-center mt-5">
                <div className="fs-2 fw-bold">Наши приоритетные направления</div>
              </div>
            </div>
            <div className="container my-5 mx-auto text-center">
              <div className="row my-4">
                <AboutActivityItem bg={"bg-primary"} name={"Производим"} />
                <AboutActivityItem bg={"bg-success"} name={"Формуем"} />
              </div>
              <div className="row gy-4">
                <AboutActivityItem bg={"bg-danger"} name={"Вырубаем"} />
                <AboutActivityItem bg={"bg-warning"} name={"Печатаем"} />
                <AboutActivityItem bg={"bg-info"} name={"Упаковываем"} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center mt-5">
                <div className="fs-2 fw-bold">Наши сертификаты</div>
              </div>
            </div>
            <div className="container my-5 mx-auto text-center">
              <div className="row">
                {aboutDocsInitialData.map((item) => (
                  <AboutDocsItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="container about-tabs full-size d-block my-5">
              <div className="row">
                <div className="col-12 text-center mt-5">
                  <div className="fs-2 fw-bold">Наше оборудование</div>
                </div>
              </div>
              <div className="row">
                <ul className="nav justify-content-center my-5">
                  {aboutOurMachinesLinksInitialData.map((item) => (
                    <AboutOurMachinesLink key={item.id} item={item} />
                  ))}
                </ul>
              </div>
              <div className="row full-size">
                {/* Tab panes */}
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    role="tabpanel"
                    id="tab-pane-all"
                  >
                    <div className="row gy-4">
                      {tabPaneInitialData.map((item) => (
                        <TabPaneItem
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          text={item.text}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container about-portfolio my-5">
              <div className="row">
                <div className="col-12 text-center mt-5">
                  <div className="fs-2 fw-bold">Портфолио</div>
                </div>
              </div>
              <div className="row my-5">
                <AboutPortfolioSwiper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
