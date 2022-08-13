import React from "react";
import { useState } from "react";

const Exercise11 = () => {

    const [isMousedOver, setMouseOver] = useState(false)
    const [input, setInput] = useState('')
    const [name, setName] = useState('')


    const handleMouseOver = () => {
        // console.log("Moused over");
        setMouseOver(true)
    }

    const handleMouseOut = () => {
        // console.log("Mouse out");
        setMouseOver(false)
    }

    const handleInputChange = (event) => {
        // console.log("CHANGED" + event.target.value);
        setInput(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(handleInputChange);
        setInput("")
        setName(input)
    }
    
    return (
        <div className="container">
          <h1>Hello {name}</h1>
          <form onSubmit={handleSubmit}>
                <input 
                        value={input}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="What's your name?">
                </input>

                <button
                            style={{ backgroundColor : isMousedOver ? "black" : "white"}}
                            // onClick={handleSubmit}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >Submit
                    </button>
            </form>
            
        </div>
      );
}


export default Exercise11;