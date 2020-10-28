import React from "react";
import styles from "../css/mainContent.css";

function NewsBox(props) {
    return(
        <div className="news-box">
            <h2>{props.details.title}</h2>
            <img id="" className="" src={props.details.imgUrl} alt="" />
            <p>{props.details.description}</p>
        </div>
    )
}

export default NewsBox;