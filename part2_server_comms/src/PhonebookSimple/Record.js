import React from "react";
import Contact from "./Contact";

function Record({ persons, newFilter }) {
    // make it case insensitive
    let lowerCaseFilter = newFilter.toLowerCase();
  
    // return new filtered array
    let filteredArray = persons.filter((person) =>
      person.name.toLowerCase().includes(lowerCaseFilter) ||
      person.phone.includes(newFilter)
    );
  
    // render components, unfiltered and filtered
    const unfilteredContacts = persons.map((person) => (
      <Contact
        name={person.name}
        phone={person.phone}
        key={person.id}
        id={person.id}
      />
    ));
  
    const filteredContacts = filteredArray.map((person) => (
      <Contact
        name={person.name}
        phone={person.phone}
        key={person.id}
        id={person.id}
      />
    ));
  
    const recordsToShow = newFilter ? filteredContacts : unfilteredContacts
                            ;
  
    return (
      <>
        <h2>Numbers</h2>
        <div>
          {recordsToShow}
        </div>
      </>
    );
  }

  export default Record