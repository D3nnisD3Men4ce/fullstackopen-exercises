import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";




const KeeperApp = () => {

    const [notes, setNewNote] = useState([])

    const addNote = (note) => {
        if (note.title.trim().length === 0 || note.content.trim().length === 0) {
            return alert("Empty Field!")
        }
        setNewNote(prev => {
            return [...prev, note]
        })
        
    }
    

    const deleteNote = (id) => {
        setNewNote(prev => {
            return (
                prev.filter( (note, index) => {
                    return (
                        index !== id
                )
            }))
        })
    }


    return (
        <div>
          <Header />
          <CreateArea addNote={addNote} />
          {notes.map( (note, index) => {
            return <Note 
                        key={index} 
                        id={index}
                        title={note.title} 
                        content={note.content} 
                        onDelete={deleteNote}
                    />
          })}
          
          <Footer />
        </div>
      );
}



export default KeeperApp;