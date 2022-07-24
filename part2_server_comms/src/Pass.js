import React from "react"

const Header = ( {course} ) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Part = (props) => {
  return (
    <p>
     {props.part.name} {props.part.exercises}
    </p>
  )
}

// "props" can be named to anything since pagpasa sa iya kay nakabuak na daan

const Content = ( {course} ) => {
  return (
    <div>
      {course.parts.map( (part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

// Strictly "course" ang gamiton since pagpasa sa iya kay wala siya gibuak

// required ang key={} nga parameter
// dapat unique pud ang keys sa mga children kay mu-error siya if dili

const Total = ( {course} ) => {
  const total = course.parts.reduce(function(sum, x) {
  // console.log('AAAAAAAAAAAAAA', sum, x)
    return (
        sum + x.exercises
    )
  }, 0)

  // total is stored in a variable

  // console.log("AAAAAAAAAA", course.parts)
  return (
    <h3>
      total is {total} exercises
    </h3>
  )
}

const Pass = ( { course } ) => {
  // {console.log('AAAAAAAAAAAAAAAAAAA', course)}
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default Pass; 
