import React from "react";
import { Link } from "react-router-dom";  
import "../css/variables.css";
import "../css/header.css";
import logo from '../SmallLogo-372w.webp';
import NavBarPhone from "./NavBarPhone";
import HamburgerMenu from "./HamburgerMenu";


function Header() {

    function linkActive() {
      document.querySelector('.link').classList.remove('link-active');
      this.classList.add('link-active');
    }

    return(
      <header>
     
      <nav className="fixed menu-desk">
        <div className="container">
          <div className="row">
            <div className="logo col-lg-2">
            <Link className="link active" to="/">
              <img id="logo" src={logo} alt="logo"/>
            </Link>
            </div>
            <div className="menu col-lg-10">
            
              <ul>
                <Link onclick="linkActive()" to="/technologies"><li className="link">Technology</li></Link>
                <Link onclick="linkActive()" to="/products"><li className="link">Products &#38; Applications</li></Link>
                <Link onclick="linkActive()" to="/service"><li className="link">Service</li></Link>
                <Link onclick="linkActive()" to="/company"><li className="link">Company</li></Link>
                <Link onclick="linkActive()" to="/contacts"><li className="link">Contacts</li></Link>
                <Link onclick="linkActive()"to="/news"><li className="link">News</li></Link>
              </ul>
            
            </div>
          </div>
        </div>
          
          <div className="container-fluid header-bottom">
            <div className="row">
              <div className="col-12">
                <h3 id="phone">Phone:+49 89  319 048 55 - E-mail: pincopallo@hotmail.com</h3>
              </div>
            </div>
          </div>
          
      </nav>

    <NavBarPhone />
    <HamburgerMenu />
    
    </header>
    );
}

export default Header;