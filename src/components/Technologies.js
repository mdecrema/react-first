import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "../css/variables.css";
import "../css/home.css";
import "../css/technologies.css";
import Hero from "./Hero";  
import goccia from "../goccia.bmp";
import picture8 from "../Picture8.jpg";
import prova from "../prova.jpg";
import techno from "../techno2.jpg";
import grass from "../grass2.png";


function Technologies() {
    const divStyle = {
        backgroundImage: 'url(' + grass + ')'
      };
    const technologies = "technologies";
    const title = "Technologies";
    const text = "Silany is developing nano and micro technologies for surface coatings. Several patents make these technologies unique and exclusive. Efficiency, practicality and competitiveness are the keywords!";
    return(
        <div>
            <Hero type={technologies} imgUrl={techno} title={title} text={text} />
            <div className="superhydrophobic">
            <h2><strong>Superhydrophobic Silicone Nano-Filaments (SNF)</strong></h2>

            <div style={divStyle} className="greenLawn">
            <h3>Like an invisible green lawn</h3>
            <p>
            This is the image we want to convey: just like a lawn preserves the soil from natural erosion, avoids water
            stagnation and promotes transpiration... in the same way our coatings do with products on what they are applied.
            </p>
            </div>
            <section className="images-side">
                <img id="" className="imgProva" src={goccia} alt="" />
                <img id="" className="imgProva" src={picture8} alt="" />
            </section>
            <section className="text-side">
                <p>
            The Droplet-Assisted Growth ans Shaping (DAGS) Approach allows for synthesize polymeric nano- and microstructures controlling size and shape.
        Based on this new synthesis pathway we have synthesize silicone nanofilaments which are very useful for a simple conversion of surfaces, i.e. from hydrophilic into 
        <strong>superhydrophobic surfaces (Contact Angle &#62; 150°).</strong> Subsequent reaction schemes lead to all kind of wetting and antiwetting properties including 
        <strong>superhydrophobic surfaces</strong>.<br /><br />

        Further, the <strong>surface area is tremendously increased</strong> by this coating, i.e. the efficiency of heterogenous 
        chemical processes including catalysis (for example for water purification) is significantly increased.<br /><br />

        The surface coating is, beside the minimized material required, <strong>highly sustainable</strong> since<br />
        a) degradation in nature takes place<br />
        b) degradation products are natural products<br /><br />

        Due to the appropriate adjustment of the reaction conditions it is shown tahat many other nanostructures can be synthesized, i.e. nano-vessels, discs, nanotubes etc.
 
      </p> 
    </section>
    </div>

    <div className="slider-box">
    <h3>TECHNIQUES</h3>
    <div className="slider">
      <div className="freccina sx"><i className="fas fa-arrow-alt-circle-left"></i></div>
      <div className="freccina dx"><i className="fas fa-arrow-alt-circle-right"></i></div>

    <section id="gpc" className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 box techno slider-text active first">
        <h4>GPC</h4>
        <h5>(Gas Phase Coating)</h5>
        <div className="techinque-icon">
          <FontAwesomeIcon icon={faWind} className="icon" />
        </div>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Eco-friendly</li>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Cheap</li>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Batch or continuous process</li>
        </ul>
    </section>
    <section id="sc" className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 box techno slider-text">
        <h4>SC</h4>
        <h5>(Spray Coating)</h5>
        <div className="techinque-icon">
          <FontAwesomeIcon icon={faSprayCan} className="icon" />
        </div>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Fast</li>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Abrasion resistant</li>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Flexible</li>
        </ul>
    </section>
    <section id="lpc" className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 box techno slider-text last">
        <h4>LPC</h4>
        <h5>(Liquid Phase Coating)</h5>
        <div className="techinque-icon">
          <FontAwesomeIcon icon={faTint} className="icon" />
        </div>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Powder collection</li>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Solvent reusing</li>
          <li><FontAwesomeIcon icon={faCheck} className="tick" />&nbsp;Specific reactions</li>
        </ul>
    </section>
    </div>
    </div>
        </div>
    );
}

export default Technologies;