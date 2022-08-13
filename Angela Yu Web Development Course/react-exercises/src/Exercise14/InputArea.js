import React from "react";
import { useState } from "react";



const InputArea = (props) => {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }


    return (
        <div className="form">
            <input onChange={handleChange} value={input} type="text" />
            <button onClick={() => {
                props.addNote(input)
                setInput("")
                }}>
            <span>Add</span>
            </button>
        </div>
    )
    
}


export default InputArea;