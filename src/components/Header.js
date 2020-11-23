import React from "react";
import { Link } from "react-router-dom";  
import "../css/variables.css";
import "../css/header.css";
import logo from '../SmallLogo-372w.webp';
import NavBarPhone from "./NavBarPhone";
import HamburgerMenu from "./HamburgerMenu";


function Header() {

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
                <Link to="/technologies" className="link"><li>Technology</li></Link>
                <Link to="/products" className="link"><li>Products &#38; Applications</li></Link>
                <Link to="/service" className="link"><li>Service</li></Link>
                <Link to="/company" className="link"><li>Company</li></Link>
                <Link to="/contacts" className="link"><li>Contacts</li></Link>
                <Link to="/news" className="link"><li>News</li></Link>
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