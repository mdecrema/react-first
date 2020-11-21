import React from "react";
import "../css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from "@fortawesome/free-solid-svg-icons"; 
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu() {
    return(
        <div class="page-hidden-menu">
        <div class="hidden-menu fl_left">
          <ul>
            <li class="home"><a href="silany.php"> <FontAwesomeIcon icon={faHome} className="home-icon" />Home</a></li>
            <li><a href="technologies.php">Technologies</a></li>
            <li><a href="products.php">Products &#38; Applications</a></li>
            <li>Service</li>
            <li>Company</li>
            <li>Contacts</li>
            <li>News</li>
          </ul>
        </div>
        <div class="close-hidden-menu fl_left">
          <div class="close-icon">
          <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div> 
    );
}

export default HamburgerMenu;