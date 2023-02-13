import React from "react";

import label from "../../assets/images/logo_black.webp";

function Footer() {
  return (
    <footer className="footer container-fluid mt-5 py-5">
      <div className="container">
        <div className="col-12">
          <div className="label text-center my-5">
            <img src={label} alt="Логотип" />
          </div>
          <div class="container bottom_border">
            <div class="row d-flex justify-content-between">
              <div class="col-sm-4 col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>
                <p class="mb10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <p>
                  <i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
                </p>
                <p>
                  <i class="fa fa-phone"></i> +91-9999878398{" "}
                </p>
                <p>
                  <i class="fa fa fa-envelope"></i> info@example.com{" "}
                </p>
              </div>
              <div class=" col-sm-4 col-md col-6 col text-center">
                <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                <ul class="footer_ul_amrc">
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
              <div class=" col-sm-4 col-md  col-6 col text-end">
                <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>

                <ul class="footer_ul_amrc">
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
              {/* <div class=" col-sm-4 col-md  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>

                <ul class="footer_ul2_amrc">
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter fleft padding-right"></i>{" "}
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

          <div class="container">
            <ul class="footer_bottom_ul_amrc">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <p class="text-center">
              &#169; ООО «NPD-упаковка», 2019–2023 Все права защищены
            </p>
            <ul class="social_footer_ul">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
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
