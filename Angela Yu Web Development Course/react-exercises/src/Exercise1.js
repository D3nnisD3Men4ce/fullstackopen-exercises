




const evenSecond = {
    color: "green"
}

const oddSecond = {
  color: "red"
}

const greeting = () => {

  const date = new Date().getSeconds()

  if (date % 2 === 0) {
    return (
      <h1 style={evenSecond}>{date} Even</h1>
    )
  }

  return (
    <h1 style={oddSecond}>{date} Odd</h1>
  )
      
}


const Exercise1 = () => {
  return (
      greeting()
    )
}

export default Exercise1;
