import React from "react";
import "../css/variables.css";
import homeCover from "../homeCover.jpg";

function Jumbotron() {
    const cover = {
        backgroundImage: "url("+ homeCover +")"
    };
    return(
        <div style={cover} className="container-fluid jumbotron">
            <div className="jumbotron-opacity"></div>
            <div className="jumbo-text">
                <h2>Invisible coatings for visible results</h2>
            </div>
        </div>
    );
}

export default Jumbotron;