import Country from "./Country"
import Filter from "./Filter"

const Display = ( {countries, filter} ) => {
    if (countries) {
        const filteredCountries = countries.filter( country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        
        if (filteredCountries.length > 10) {
            return (
                <p>Too many mathches, specify another filter</p>
            )
        }

        else if (filteredCountries.length === 1) {
            return (
                <Country country={filteredCountries[0]}/>
            )
        }

        else {
            return (
                <ul>
                    {filteredCountries.map( (country, i) =>
                        <Filter key={i} country={country} />)}
                    {/* {console.log("NNNNNNNNNNNNAAAAAAAAAAAAAAAMMMMMMMMMMMMMEEEEEEEEEEEEEEE", countries)} */}
                </ul>

            )
        }
    }

    return (
        <></>
    )
    
}

export default Display