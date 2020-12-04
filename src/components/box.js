import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/home.css";
import "../css/variables.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

AOS.init();

const Box = (props) => (
   
    <section className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 box" data-aos="fade-left">
        <FontAwesomeIcon icon={props.name} className="icon" />
        <h3>{props.title}</h3>
        <p>
            {props.description}
        </p>
        <hr />
        <div className="find_more_container">
        
        <Link to={props.link}>Find out more</Link>
        </div>
    </section>
    
)

export default Box;