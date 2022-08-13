import React from "react";
import Form from "./Form";
import Welcome from "./Welcome"

var userLoggedIn = false;
// var userLoggedIn = true;


function Exercise7() {
  return (
    <div className="container">
        {/* Condition   ?    DO IF TRUE     :    DO IF FALSE */}
        {userLoggedIn   ?   <Welcome />     :    <Form />}
    </div>
  );
}

export default Exercise7;
