import React from "react";
import Login from "./Login"
import Register from "./Register"

var userIsRegistered = false;
// var userIsRegistered = true;


const Form = () => {
  return (
    userIsRegistered ? <Login /> : <Register />
  );
}

export default Form;
