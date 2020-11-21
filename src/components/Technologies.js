import React from "react";
import "../css/variables.css";
import "../css/technologies.css";
import Hero from "./Hero";  
import goccia from "../goccia.bmp";
import prova from "../prova.jpg";
import techno from "../techno2.jpg";
import grass from "../grass2.png";


function Technologies() {
    const divStyle = {
        backgroundImage: 'url(' + grass + ')'
      };
    const technologies = "technologies";
    const title = "Technologies";
    const text = "Silany is developing <bold>nano and micro technologies for surface coatings</bold>. Several patents make these technologies <bold>unique and exclusive</bold>. <bold>Efficiency, practicality and competitiveness</bold> are the keywords!";
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
                <img id="" className="imgProva" src={prova} alt="" />
                <img id="" className="imgProva" src={prova} alt="" />
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
      <div id="gpc" className="slider-text active first">
      <div className="pallinoNum">
        1
      </div>
        <h4>GPC</h4>
        <h5>(Gas Phase Coating)</h5>
        <div className="techinque-icon">
          <i className="fas fa-wind"></i>
        </div>
        <ul>
          <li><i className="fas fa-check tick"></i>&nbsp;Eco-friendly</li>
          <li><i className="fas fa-check tick"></i>&nbsp;Cheap</li>
          <li><i className="fas fa-check tick"></i>&nbsp;Batch or continuous process</li>
        </ul>
      </div>
      <div id="sc" className="slider-text">
      <div className="pallinoNum">
        2
      </div>
      <h4>SC</h4>
        <h5>(Spray Coating)</h5>
        <div className="techinque-icon">
          <i className="fas fa-spray-can"></i>
        </div>
        <ul>
          <li><i className="fas fa-check tick"></i>&nbsp;Fast</li>
          <li><i className="fas fa-check tick"></i>&nbsp;Abrasion resistant</li>
          <li><i className="fas fa-check tick"></i>&nbsp;Flexible</li>
        </ul>
      </div>
      <div id="lpc" className="slider-text last">
      <div className="pallinoNum">
        3
      </div>
      <h4>LPC</h4>
        <h5>(Liquid Phase Coating)</h5>
        <div className="techinque-icon">
          <i className="fas fa-tint"></i>
        </div>
        <ul>
          <li><i className="fas fa-check tick"></i>&nbsp;Powder collection</li>
          <li><i className="fas fa-check tick"></i>&nbsp;Solvent reusing</li>
          <li><i className="fas fa-check tick"></i>&nbsp;Specific reactions</li>
        </ul>
      </div>
    </div>
    </div>
        </div>
    );
}

export default Technologies;