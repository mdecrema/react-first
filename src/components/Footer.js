import React from "react";
import "../css/variables.css";
import "../css/footer.css";
import logo from "../SmallLogo-372wbianco.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTripadvisor } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return(
      <footer className="fondo">
      <div className="container">
        <div class="row">
          <div class="col-lg-5 left">
              <ul className="contatti">
                  <li>
              <img id="logofooter" src={logo} alt="" />
            </li>
                  <li>Ragione Sociale: 'CompanyName' S.P.A.</li>
                  <li>Sede legale: Contrada Colle Delle Api, 100/A</li>
                  <li>86100 - City(--)</li>
                  <li>Pec: email@pec.it</li>
                  <li>Tel: +39 0874 4981</li>
                  <li>Fax: +39 0874 629584</li>
                  <li>info@email.it (per segnalazioni degli utenti)</li>
                  <li>commerciale@email.it</li>
                  <li>export@email.it</li>
                  <li>telefono 380-1292455</li>
                  <li className="copyright">Copyright © All rights reserved.</li>
              </ul>
            
          </div>
          <div class="col-lg-4 central">
              <h5>COMPANY</h5>
              <ul>
                  <li>Company</li>
                  <li>xxxxxxxx</li>
                  <li>xxxxxxxx</li>
                  <li>Infos</li>
                  <li>Our Mission</li>
                  <li>Superhydrophobic</li>
                  <li>Employees</li>
              </ul>
              <h5>PRODUCTS</h5>
              <ul>
                  <li>*Tipo di materiali usati*</li>
                  <li>*Link prodotto*</li>
                  <li>*Link prodotto*</li>
                  <li>*Servizio clienti*</li>
                  <li>*Referenze*</li>
              </ul>
          </div>
          <div class="col-lg-3 right">
          <h5>JOIN US</h5>
              <div className="social-box">
                <FontAwesomeIcon icon={faFacebookF} className="social_icon" />
                <FontAwesomeIcon icon={faTwitter} className="social_icon" />
                <FontAwesomeIcon icon={faInstagram} className="social_icon" />
                <FontAwesomeIcon icon={faGooglePlusG} className="social_icon" />
                <FontAwesomeIcon icon={faTripadvisor} className="social_icon" />
              </div>
              <div className="newsletter-box">
                <h6>Subscribe our newsletter</h6>
                <a className="newsletter" href="#">Newsletter</a>
              </div>
          </div>
      </div>
    </div>
  </footer>
    );
}

export default Footer;