import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/variables.css";
import BoxHome from "./boxHome";
import Jumbotron from "./Jumbotron";

AOS.init();

function Home(props) {
  window.onload = window.scrollTo(0, 0);
    return (
      <main>
      <Jumbotron />
      <div className="page_wrapper container">

        <div className="container" data-aos="fade-left">
          <div className="col-lg-12 box-text">
            <h2>Silany, personal advisor for your product enhancement</h2>
            <p>
              Explore competence in front-end coatings and functional materials.
              Products and technology for textile industry, construction,
              medical market, wood industry, and more is ready for your customers.
              100% sustainability included.
            </p>
          </div>
        </div>
        <div className="container info">
          <div className="row">
           <BoxHome />          
           </div>
        </div>

      </div>
    </main>
      
    );
  }

export default Home;