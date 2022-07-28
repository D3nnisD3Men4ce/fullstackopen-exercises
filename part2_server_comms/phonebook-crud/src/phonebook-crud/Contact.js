import React from "react";


function Contact({ name, phone, deleteContact }) {

    return (
      <div>
        {name}: {phone} <button onClick={deleteContact}>Delete</button>

        <pre />
      </div>
    )
  }

  export default Contact