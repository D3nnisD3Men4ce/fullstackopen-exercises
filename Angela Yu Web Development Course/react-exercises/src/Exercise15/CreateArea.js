import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'; // Alternative for <button>
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title:"",
    content:""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setNote( prev => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNote(note)
    setNote({
      title:"",
      content:""
    })
  }

  const expand = () => {
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note">
        {isExpanded &&         
          <input 
                onChange={handleChange}
                value={note.title} 
                name="title" 
                placeholder="Title" 
          />}
        <textarea 
              onChange={handleChange}
              onClick={expand}
              value={note.content} 
              name="content" 
              placeholder="Take a note..." 
              rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
            <Fab onClick={handleSubmit}>
                <AddIcon />
            </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
