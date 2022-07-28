import React from "react";
import Pass from "./Pass";


const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
} 


const Course = ({ courses }) => {
  console.log(courses)
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

export default Course;

