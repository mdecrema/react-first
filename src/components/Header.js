import React from "react";
import Logo from '../bbcLogo.jpg';
import styles from "../css/header.css";

function Header() {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img id="img" src={Logo} />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Business</a></li>
                    <li><a href="">World</a></li>
                </ul>
            </div> 
        </nav> 
    )
}

export default Header;