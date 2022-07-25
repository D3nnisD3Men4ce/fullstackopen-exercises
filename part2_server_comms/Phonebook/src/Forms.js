import React from "react"
import { useState } from "react"


const Note = () => {
    return (
        console.log("aw")
    )
}


const Forms = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
        }
    
    const addNote = (event) => {
        event.preventDefault()
        // console.log('button clicked', event.target)
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
            }
            setNotes(notes.concat(noteObject))      // Use, concat() method, never mutate state directly in React!
            setNewNote('')
        }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    return (
        <div>
            <h1>FORMS</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map(note => 
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>   
        </div>
    )
}

export default Forms