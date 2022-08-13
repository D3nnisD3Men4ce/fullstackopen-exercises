import React, { useState } from "react";


const ListNotes = (props) => {

    const [isDone, setIsDone] = useState(false)

    // const displayNotes = (notes) => {
    //     return <li style={ isDone ? {textDecoration: "line-through"} : null }>{notes}</li>
    // }

    const tickNote = () => {
        setIsDone(prev => {
            return !prev
        })
    }

    return (
        <div onClick={tickNote} onDoubleClick={() => props.onDbClick(props.id)}>
            <li 
                style={ {textDecoration: isDone ? "line-through" : "none" } }>
                {props.notes}
            </li>
        </div>
    )
}


export default ListNotes;