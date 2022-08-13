import React from "react";
import { useState } from "react";

const Exercise8 = () => {

    const [count, setCount] = useState(0)
    
    const increase = () => {
        return setCount(count + 1)
    }

    return(
        <div className="container">

            <h1>{count}</h1>
            
            <button onClick={increase}> +   </button>

            <button onClick={() => {
                return setCount(count - 1)
            }}> -   </button>

        </div>
    )
}

export default Exercise8;