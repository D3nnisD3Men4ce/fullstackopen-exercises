import React from 'react';
import ReactDOM from 'react-dom/client';
import Course from './Course';
import Forms from './Forms';
import Phonebook from './PhonebookSimple/Phonebook';

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]



// Is there a specific reason why the key has to be on the 
// outermost returned element? 

// When React goes through an array, it only looks at the things 
// directly in it. It doesn't recurse all the way through 
// looking for a key. If it did, it would (1) be slow, and 
// (2) cause ambiguity when there were nested arrays.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      {console.log(courses)}
      <Course courses={courses} />
      <Forms />
      <Phonebook />
    </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

