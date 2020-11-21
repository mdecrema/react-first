import React from "react";
import "../css/home.css";
import "../css/variables.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


const Box = (props) => (
   
    <section className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 box">
        <FontAwesomeIcon icon={props.name} className="icon" />
        <h3>{props.title}</h3>
        <p>
            {props.description}
        </p>
        <hr />
        <div className="find_more_container">
            <a className="find_more" href="">Find out more</a>
        </div>
    </section>
    
)

export default Box;