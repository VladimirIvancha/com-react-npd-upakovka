import React from "react";

import label from "../../assets/images/logo_black.webp";

function Footer() {
  return (
    <footer className="footer container-fluid mt-5 py-5">
      <div className="container">
        <div className="col-12">
          <div className="label text-center pb-3">
            <img src={label} alt="Логотип" />
          </div>
          <div className="container bottom_border">
            <div className="row d-flex justify-content-between">
              <div className="col-sm-4 col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Наши контакты</h5>
                <p className="mb10">
                  Адрес производства:
                </p>
                <p>
                  <i className="fa fa-location-arrow"></i> 141155, Московская обл., г.Подольск, ул.Львовская, вл.55, стр.3
                </p>
                <p>
                  <i className="fa fa-phone"></i> +7(495)777-77-77
                </p>
                <p>
                  <i className="fa fa fa-envelope"></i> info@npd-upakovka.ru
                </p>
              </div>
              <div className=" col-sm-4 col-md col-6 col text-center">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                <ul className="footer_ul_amrc">
                  <li>
                    <a href="#">Image Rectoucing</a>
                  </li>
                  <li>
                    <a href="#">Clipping Path</a>
                  </li>
                  <li>
                    <a href="#">Hollow Man Montage</a>
                  </li>
                  <li>
                    <a href="#">Ebay & Amazon</a>
                  </li>
                  <li>
                    <a href="#">Hair Masking/Clipping</a>
                  </li>
                  <li>
                    <a href="#">Image Cropping</a>
                  </li>
                </ul>
              </div>
              <div className=" col-sm-4 col-md  col-6 col text-end">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                <ul className="footer_ul_amrc">
                  <li>
                    <a href="#">Remove Background</a>
                  </li>
                  <li>
                    <a href="#">Shadows & Mirror Reflection</a>
                  </li>
                  <li>
                    <a href="#">Logo Design</a>
                  </li>
                  <li>
                    <a href="#">Vectorization</a>
                  </li>
                  <li>
                    <a href="#">Hair Masking/Clipping</a>
                  </li>
                  <li>
                    <a href="#">Image Cropping</a>
                  </li>
                </ul>
              </div>
              {/* <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

                <ul className="footer_ul2_amrc">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="container">
            <ul className="footer_bottom_ul_amrc">
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Продукция</a>
              </li>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <p className="text-center">
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
    </footer>
  );
}

export default Footer;
