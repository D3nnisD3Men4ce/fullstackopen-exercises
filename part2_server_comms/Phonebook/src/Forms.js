import React, { useEffect } from "react"
import { useState } from "react"
import noteService from "./services/notes"
import "./index.css"


const Note = ( {note, toggleImportanceOf} ) => {
    const label = note.important
        ? 'make not important' : 'make important'

    return (
        <li>
            {note.content}
            <button 
                style={{marginLeft: 1 + 'em'}}
                onClick={toggleImportanceOf}> {label}  </button>
            <br />
            <br />
        </li>
    )
}

const Notification = ( {message} ) => {
    if (message === null) {
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}


const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
      }
      return (
        <div style={footerStyle}>
          <br />
          <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
        </div>
      )
}

const Forms = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('Errorrrrrr')


    const handleNoteChange = (event) => {
        // console.log(event.target.value)
        setNewNote(event.target.value)
        }
    
    
    const getData = () => {
        noteService
            .getAll()
            .then(response => {
                setNotes(response)
                console.log(response);
            })
    }

    useEffect(getData, [])


    const addNote = (event) => {
        event.preventDefault()
        // console.log('button clicked', event.target)
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            }
            
            noteService
                .create(noteObject)
                .then(response => {
                    // console.log("RRRRRRRRRRRRRRRRR", response);
                })

                
            setNotes(notes.concat(noteObject))      // Use, concat() method, never mutate state directly in React!
            setNewNote('')

            console.log("TTTTTTTTTTTTTTTTTTT", notes);
        } 

    
    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}
        
        noteService
            .update(id, changedNote)
            .then(response => {
                setNotes(notes.map(note => 
                    note.id !== id ? note : response
                    
                ))
                console.log("QQQQQQQQQQQQQQQQQQQ", response)
            })
            .catch(error => {
                setErrorMessage(`Note '${note.content}' was already removed from server`)
                    setTimeout(() => {
                        setErrorMessage(null)
                        }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
        
    }
    

    const notesToShow = showAll
        ? notes : notes.filter(note => note.important === true)


    return (
        <div>
            <h1>FORMS</h1>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>   

            <h1>NOTES</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>

                <ul>
                {notesToShow.map(note => 
                    <Note 
                        key={note.id} 
                        note={note}
                        toggleImportanceOf={() => toggleImportanceOf(note.id)} />
                )}
                </ul>
            </div>
            <Footer  /> 
        </div>
    )
}

export default Forms