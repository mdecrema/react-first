import React from "react";
import "../css/variables.css";
import "../css/hero.css";

const Hero = (props) => {
    const image = {
        backgroundImage: 'url(' + props.imgUrl + ')',
      };
    return(
        <div style={image} id={props.type} className="container-fluid hero">
            <div className="hero-opacity"></div>
                <div className="hero-text">
                <h2>{props.title}</h2>
                <p>
                    {props.text}
                </p>
            </div>
        <div className="hero-img"></div>
    </div>
    );
}

export default Hero;