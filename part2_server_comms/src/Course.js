import React from "react";
import Pass from "./App";


const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
} 


const App = ({ courses }) => {
  {console.log(courses)}
  const title = "Web Dev Curriculum"
  return (
    <div>
      <Title title={title} />

      {courses.map( (course) => (
        <Pass key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;

