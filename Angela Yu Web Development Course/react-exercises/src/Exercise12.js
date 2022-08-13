import React from "react";
import { useState } from "react";

const Exercise12 = () => {

    // const [input, setInput] = useState('')
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
      });
    

    const handleChange = (event) => {
        console.log(event.target);
        const {name, value} = event.target
        setContact((prev) => {
            if(name === 'fName') {
                return {
                    fName: value,
                    lName: prev.lName,
                    email: prev.email
                }
            } else if (name === 'lName') {
                return {
                    fName: prev.fName,
                    lName: value,
                    email: prev.email
                }
            } else if (name === 'email') {
                return {
                    fName: prev.fName,
                    lName: prev.lName,
                    email: value
                }
            }
        })
    }

      return (
        <div className="container">
          <h1> Hello {contact.fName} {contact.lName} </h1>
          <p> {contact.email} </p>
          <form>
            <input onChange={handleChange} name="fName" placeholder="First Name" />
            <input onChange={handleChange} name="lName" placeholder="Last Name" />
            <input onChange={handleChange} name="email" placeholder="Email" />
            <button>Submit</button>
          </form>
        </div>
      )
}

export default Exercise12;