import React from "react";
import "../css/variables.css";
import "../css/header.css";
import logo from '../SmallLogo-372w.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

function NavBarPhone() {
    return(
        <nav className="fixed menu-smart">
        <div className="container">
          <div className="row">
            <div className="menu col-xs-12 col-sm-12 col-md-12">
              <div className="logo-box">
              <a href="silany.html">
                <img id="logo" src={logo} alt="logo"/>
              </a>
              </div>
              <div className="hamburger-box">
                <div className="hamb-logo transform">
                <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
            </div>
          </div>
        </div>
          
          <div className="container-fluid header-bottom">
            <div className="row">
              <div className="pos_rel col-12">
                <h3 id="phone">Phone:+49 89  319 048 55 - E-mail: pincopallo@hotmail.com</h3>
              </div>
            </div>
          </div>
          
      </nav>
    );
}

export default NavBarPhone;