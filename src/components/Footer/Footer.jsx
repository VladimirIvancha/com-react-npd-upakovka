import React from "react";

import label from "../../assets/images/logo_black.webp";

function Footer() {
  return (
    <footer className="footer container-fluid bg-secondary mt-5 py-5">
      <div className="container">
        <div className="col-12">
          <div className="label text-center">
            <img src={label} alt="Логотип" />
          </div>
          <div className="copyright d-block text-center my-4">
            &#169; ООО «NPD-упаковка», 2019–2023 Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
