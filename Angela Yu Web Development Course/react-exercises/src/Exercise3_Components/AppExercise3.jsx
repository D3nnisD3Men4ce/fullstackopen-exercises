import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notesdb from "./notesdb";

const createNote = (note) => {
    return (
        <Notes 
            key={note.key}
            title={note.title}
            content={note.content}
        />
    )
}


function AppExercise3() {
    return(
        <div>
            <Header />
                {notesdb.map(createNote)}
            <Footer />
        </div>
    )
}

export default AppExercise3;
