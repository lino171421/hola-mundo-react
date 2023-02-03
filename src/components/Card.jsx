import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


const Card = (props) => {
    return (
        <div className="div_Card">
            <img src={props.url}></img>
            <h2>{props.title_image}</h2>
            <p>{props.description}</p>          
        </div>
    )
}

export default Card;