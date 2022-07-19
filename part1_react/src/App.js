const Header = (props) => {
  console.log(props);
  return (
      <h3>{props.course}</h3>
  )
}

const Content = (props) => {
  console.log(props);
  return (
      <div>
        <Part1 phrase_1={props.phrase1} val_1={props.val1} />
        <Part2 phrase_2={props.phrase2} val_2={props.val2} />
        <Part3 phrase_3={props.phrase3} val_3={props.val3}/>
      </div>
  )
}



const Part1 = (props) => {
  return (
    <p>{props.phrase_1}</p>
  )
}



const Part2 = (props) => {
  return (
    <p>{props.phrase_2}</p>
  )
}



const Part3 = (props) => {
  return (
    <p>{props.phrase_3}</p>
  )
}



const Total = (props) => {
  return (
    <h2>
      {props.val1 + props.val2 + props.val3}
    </h2>
  )
}



const Pass = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name:'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    } 
  ]


  return (
    <div>
      <h1>App1</h1>
      <Header course={course}/>
      <Content phrase1={parts[0].name} 
               phrase2={parts[1].name}  
               phrase3={parts[2].name}
               val1={parts[0].exercises}
               val2={parts[1].exercises}
               val3={parts[2].exercises} />
      <Total   val1={parts[0].exercises}
               val2={parts[1].exercises}
               val3={parts[2].exercises} />
    </div>
  )
}

export default Pass; 
