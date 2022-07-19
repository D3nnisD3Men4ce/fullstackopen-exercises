import React from 'react';
import ReactDOM from 'react-dom/client';
import Pass from './App';
import Counter from './App2';
import ButtonCounter from './App3';
import ComplexState from './App4';
import Unicafe from './App5';
import Unicafe2 from './App5_2';
import Anecdotes from './App6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pass />
    {/* <Counter /> */}
    <ButtonCounter />
    <ComplexState />
    {/* <Unicafe /> */}
    <Unicafe2 />
    <Anecdotes />
  </React.StrictMode>
);

// StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).





// Before implementing useState hook
// Refreshes the page when iterating
// let counter = 1

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App2 counter = {counter}/>
//   );
// }

// setInterval(() => {
//   refresh();
//   counter += 1
// }, 1000)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
