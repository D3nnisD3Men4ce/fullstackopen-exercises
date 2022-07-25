import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'

const App = () => {
  const [countries, setCountry] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
        .get("https://restcountries.com/v3.1/all")
        .then( response => {
            setCountry(response.data)
            console.log(response.data)
        })
      return (
        setCountry([])
      )
  }

  useEffect(hook, [])

  const handleChange = (event) => {
    let nameTag = event.target.name;
    let newValue = event.target.value;

    console.log(nameTag);

    switch (nameTag) {
      case "filter":
        setFilter(newValue)
        return
      default:
        return
    }
  }


  return (
    <div>
      <div>
        find countries <input name="filter" value={filter} onChange={handleChange} />
      </div>
        <Display countries={countries} filter={filter} />
        {/* {console.log("1111111111111111", countries.length)} */}
    </div>
  )


}

export default App;
