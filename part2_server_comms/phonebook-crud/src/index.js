import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from './phonebook-crud/Phonebook';



// Is there a specific reason why the key has to be on the 
// outermost returned element? 

// When React goes through an array, it only looks at the things 
// directly in it. It doesn't recurse all the way through 
// looking for a key. If it did, it would (1) be slow, and 
// (2) cause ambiguity when there were nested arrays.


// const Test = () => {
//   let a = [1,2,3,4,5]
//   let a2 = ['a','b','c']
//   let b = [-2,-1, 0, ...a, 6, 7, 8]
//   let c =[]
//   for (let i = 0; i < b.length; i++){
//     if (b[i] % 2 === 0) {
//       c.push(b[i])
//     } else (
//       c.push(...a2)
//     )
//   }
//   console.log("OOOOOOOOOOOOOOOOO", c);
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      <Phonebook />
      {/* <Test /> */}



    </div>



    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

