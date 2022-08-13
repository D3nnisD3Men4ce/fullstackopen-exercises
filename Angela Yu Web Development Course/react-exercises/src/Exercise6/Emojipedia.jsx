import React from "react";

const Emojipedia = (props) => {
    return (
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.symbol}
            </span>

            <span>{props.name}</span>
        </dt>
    )
    
}

export default Emojipedia;