import React from "react"
import Emojipedia from "./Emojipedia";


const Card = (props) => {

    return (
        <div className="term">
                <Emojipedia symbol={props.symbol} name={props.name}/>

                <dd>
                    {props.description}
                </dd>
        </div>
    ) 
}

export default Card;