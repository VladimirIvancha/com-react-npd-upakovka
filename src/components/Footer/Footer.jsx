import React from "react";
import { NavLink } from "react-router-dom";

import label from "../../assets/images/logo_black.jpg";
import { scheme02 } from "../../utils/initialData";
import ContactsSchemeModal from "../Contacts/ContactsSchemeModal/ContactsSchemeModal";

function Footer() {
  return (
    <footer className="footer container-fluid py-5">
      <div className="container">
        <div className="col-12">
          <div className="label text-center pb-3">
            <img src={label} alt="Логотип" />
          </div>
          <div className="container bottom_border">
            <div className="row d-flex justify-content-between">

              <div className="col-lg-4 col-md-6 col-12 text-md-start text-center d-flex flex-column">
                <h5 className="headin5_amrc col_white_amrc pt2">Наши контакты</h5>
                <div className="row">
                  <div className="row">
                    <p className="mb10">
                      Адрес производства:
                    </p>
                    <p>
                      <i className="fa fa-location-arrow"></i> 142155, Московская обл., г.Подольск, мкр.Львовский, пр-д Металлургов, д.3, стр.1
                      <br />
                      Координаты:
                      <br />
                      55.326719, 37.513517
                    </p>
                  </div>
                  <p>
                    <i className="fa fa-phone"></i> +7(495)777-77-77
                  </p>
                  <p>
                    <i className="fa fa-phone"></i> 8-800-777-77-77
                  </p>
                  <p>
                    <i className="fa fa fa-envelope"></i> info@npd-upakovka.ru
                  </p>
                </div>
              </div>

              <div className="d-none d-lg-flex flex-column col-lg-4 text-center">
                <h5 className="headin5_amrc col_white_amrc pt2">Быстрые ссылки</h5>
                <div className="footer_ul_amrc flex-column justify-content-between h-100">
                  <p>
                    <a href="#">Image Rectoucing</a>
                  </p>
                  <p>
                    <a href="#">Clipping Path</a>
                  </p>
                  <p>
                    <a href="#">Hollow Man Montage</a>
                  </p>
                  <p>
                    <a href="#">Ebay & Amazon</a>
                  </p>
                  <p>
                    <a href="#">Hair Masking/Clipping</a>
                  </p>
                  <p>
                    <a href="#">Image Cropping</a>
                  </p>
                  <p>
                    <a href="#">Image Cropping</a>
                  </p>
                  <p>
                    <a href="#">Image Cropping</a>
                  </p>
                  <p>
                    <a href="#">Image Cropping</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 text-center text-md-end mt-md-5 mt-lg-0">
                <h5 className="headin5_amrc col_white_amrc d-md-none d-lg-block pt2">Схема проезда</h5>
                <button className="btn mt-lg-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img className='col-12 rounded h-100' src={scheme02} alt='Схема проезда к офису и производству ООО "NPD-упаковка"' />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="footer_bottom_ul_amrc d-flex justify-content-between">
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/about">О нас</NavLink>
              </li>
              <li>
                <NavLink to="/products">Продукция</NavLink>
              </li>
              <li>
                <NavLink to="/services">Услуги</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
            <p className="text-center py-3">
              &#169; ООО «NPD-упаковка», 2019–2023 Все права защищены
            </p>
            <ul className="social_footer_ul px-0">
              <li className="px-0">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactsSchemeModal />
    </footer>
  );
}

export default Footer;
