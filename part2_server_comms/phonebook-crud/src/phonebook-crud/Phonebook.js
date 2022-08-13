import React, { useEffect, useState } from "react";
import Form from "./Form"
import Filter from "./Filter";
import Record from "./Record"
import phonebookService from "./phonebookServices";


const Phonebook = () => {
  const [persons, setPersons] = useState([]);
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


  const getData = () => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response)
        console.log("AAAAAAAAAALLLLLLLLLLLLl", response);
      })
  }

  useEffect(getData, [])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
    };


    if (persons.some((person) => person.name === newName)) {
        if (window.confirm(`${newPerson.name} is already added to phonebook. Replace ${newPerson.name}'s Phone number?`)) {
              
            const contact = persons.find(person => person.name === newName)
            const updatedContact = {...contact, number: newPhone}

            phonebookService
              .update(contact.id, updatedContact)
              .then(response => {
                setPersons(persons.map(contact => contact.name !== newName ? contact : response))
                console.log("UPDATEEEEEEDD")
              })
            setNewName("");
            setNewPhone("");
        }
    }


    if (newPerson.name.trim().length === 0 || newPerson.phone.trim().length === 0) {
      return (
        alert("Person must have a name and a phone number")
      )
    }
    
    setPersons([...persons, newPerson]);
    phonebookService
      .create(newPerson)
      .then(response => {
        console.log("GGGGGGGGGGGGGGGGG", response);
      })
    
    setNewName("");
    setNewPhone("");
  }


  const deleteContact = (id, name) =>{
    if (window.confirm(`Delete ${name}?`)){
      const changedPhoneBook = persons.filter(contact => contact.id !== id)
      phonebookService
        .destroy(id)
      setPersons(changedPhoneBook)
    }
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
              newFilter={newFilter} 
              deleteContact={deleteContact}/>
              {/* {updateContact(persons)} */}
    </div>
  );
};

export default Phonebook;
