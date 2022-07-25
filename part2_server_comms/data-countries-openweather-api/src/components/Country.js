import Weather from "./Weather"

const Country = ( {country} ) => {


    const imgFlagFormat = () => {
        if (country.flags.svg) {
            return country.flags.svg
        }

        return country.flags.png
    }


    return (
        <div>
            <h2>{country.name.common}</h2>
            capital: {country.capital}
            <br />
            area: {country.area}

            <h3>languages:</h3>
            <ul>
                {Object.keys(country.languages)
                        .map( (language, i) => 
                            <li key={i}>{country.languages[language]}</li>
                        )}
                {/* <img src={`country.flags.${imgFormat()}`} alt={country.name.common} width="20%"/> */}
                <img src={imgFlagFormat()} alt={country.name.common} width="20%"/>

                <br />
                
                <Weather country={country} />
            </ul>
        {/* {console.log("BBBBBBBBBBBBBBBBBBBBBBBBB", `country.flags.${imgFlagFormat()}`)} */}
        </div>
    )
}

export default Country