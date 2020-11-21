import React from "react";
import "../css/variables.css";
import "../css/footer.css";

function Footer() {
    return(
        <footer>
      <div className="container-fluid fondo">
        <div className="row">
          <div className="map">
            <a className="find_location transform" href="">Location Map</a>
          </div>
            <div className="link_utili">
              <div className="offset-lg-3 col-lg-3 fl_left social">
                <div className="social_box transform">
                  Subscribe our newsletter
                  <a className="newsletter" href="">Newsletter</a>
                </div>
              </div>
              <div className="col-lg-3 fl_left social">
                <div className="social_box transform">
                  <i className="fab fa-facebook-f social_icon"></i>
                  <i className="fab fa-twitter social_icon"></i>
                  <i className="fab fa-instagram social_icon"></i>
                  <i className="fab fa-google-plus-g social_icon"></i>
                  <i className="fab fa-tripadvisor social_icon"></i>
                </div>
              </div>
            </div>
          <div className="col-lg-12 copyright">
            <div className="copyright_box transform">
              Copyright © All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;