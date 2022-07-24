import React, { useState } from "react";
import Form from "./Form"
import Filter from "./Filter";
import Record from "./Record"


const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");

  const handleChange = (e) => {
    let nameTag = e.target.name;
    let newValue = e.target.value;

    // console.log(e.target);

    switch (nameTag) {
      case "name":
        setNewName(newValue);
        return
      case "phone":
        setNewPhone(newValue);
        return
      case "filter":
        setFilter(newValue);
        return
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    if (persons.some((person) => person.name === newPerson.name)) {
      return (
        alert(`${newPerson.name} is already added to phonebook`)
        )
    }

    if (newPerson.name.trim().length === 0 || newPerson.phone.trim().length === 0) {
      return (
        alert("Person must have a name and a phone number")
      )
    }
    
    // setPersons([...persons, newPerson]);

    setPersons(persons.concat(newPerson));
    console.log(persons.concat(newPerson));
    setNewName("");
    setNewPhone("");
  }

  return (
    <div>
      <Filter newFilter={newFilter} 
              handleChange={handleChange} />
      <Form newName={newName}
            newPhone={newPhone}
            handleChange={handleChange}
            handleSubmit={handleSubmit} />
      <Record persons={persons} 
              newFilter={newFilter} />
    </div>
  );
};

export default Phonebook;
