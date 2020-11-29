import React from "react";
import { Link, NavLink } from "react-router-dom";  
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
                <NavLink className="link" activeClassName="link-active" to="/technologies"><li>Technology</li></NavLink>
                <NavLink className="link" activeClassName="link-active" to="/products"><li className="link">Products &#38; Applications</li></NavLink>
                <NavLink className="link" activeClassName="link-active" to="/service"><li className="link">Service</li></NavLink>
                <NavLink className="link" activeClassName="link-active" to="/company"><li className="link">Company</li></NavLink>
                <NavLink className="link" activeClassName="link-active" to="/contacts"><li className="link">Contacts</li></NavLink>
                <NavLink className="link" activeClassName="link-active" to="/news"><li className="link">News</li></NavLink>
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