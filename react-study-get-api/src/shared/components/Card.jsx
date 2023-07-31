import React from "react";
import "./Card.css";

const Card = props => {
    return(
        <div className="Card">
            <div className="title">
                <h1>Advice Moment:</h1>
            </div>
            <div className="content">
                { props.children }
            </div>
        </div>
    );
}

export default Card;