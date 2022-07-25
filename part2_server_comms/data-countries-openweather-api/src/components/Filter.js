import { useState } from "react"
import Country from "./Country"

const Filter = ( {country} ) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <li>{country.name.common}
                <button onClick={ () => setShow(!show)}>show</button>            
            </li>
                     {show && true && <Country country={country}  key={country.name.common}/>}  {/* safely remove && false or change it to &&true  */}
                     {/* {console.log("SSSSSHHHHOOOOWWWWW", show)} */}
                     {/* {console.log("CCCCCOOOOUUUNNNTTTTTRYRYRYRY", <Country country={country}  />)} */}
                     {/* {console.log("IIIIINNNNNNNNDDDDDDDEEEEEEEEEXXXXXXXXX", country.name.common)} */}
            <br/>
        </div>
    )

}

export default Filter