import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import contacts from "./contacts";

const createCard = (contact) => {
    return(
        <Card 
            // id ={contact.id}
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
        />
    )
}

const Exercise5 = () => {
console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img={"https://media-exp1.licdn.com/dms/image/C5103AQHtACdJIXKfdw/profile-displayphoto-shrink_800_800/0/1520055724098?e=1665014400&v=beta&t=Rok9YWyo79wa764A-psmymrNATTYiaeEqZyLHfLq4k4"}/>

        <Card 
            name={"Without Mapping"}
            id={contacts[0].id}
            img={contacts[0].imgURL}
            phone={contacts[0].phone}
            email={contacts[0].email}
        />      
        {contacts.map(createCard)}
    </div>
  );
}

export default Exercise5;
