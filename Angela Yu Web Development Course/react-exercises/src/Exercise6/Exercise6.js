import React from "react";
import Card from "./Card";
import emojis from "./emojis";


const createCard = (emoji) => {
    return (
        <Card
            key={emoji.id}
            name={emoji.name}
            symbol={emoji.symbol}
            description={emoji.description}
        />
    )
}

const Exercise6 = () => {

    const descriptions = emojis.map( (emoji) => {
        return (
            emoji.description.substring(0,100)
        )
    })

    console.log("Map ")
    console.log(descriptions);

    var num = [1,2,3,4,5,101,102,103,104,105]



    const numbers = num.filter(x => x > 10)
    console.log("Filter ") 
    console.log(numbers);


    const numbers2 = num.reduce((prev, next) => {
        return prev + next
    })

    console.log("Reduce ")
    console.log(numbers2);


    const numbers3 = num.find(x => {
        return x > 10
    })

    console.log("Find ")
    console.log(numbers3);


    const numbers4 = num.findIndex((x) => {
        return x > 10
    })

    console.log("Find Index ")
    console.log(numbers4);

    


    return (
        <div>
          <h1>
            <span>emojipedia</span>
          </h1>

          <dl className="dictionary">

            {emojis.map(createCard)}
            

            {emojis.map(emoji => {
                return (
                    <Card
                        key={emoji.id}
                        name={emoji.name}
                        symbol={emoji.symbol}
                        description={emoji.description}
                    />
                )
            })}


            <Card
                id={emojis[0].id}
                name={emojis[0].name}
                symbol={emojis[0].symbol}
                description={emojis[0].description}
            />
            
          </dl>
        </div>
      );

}







export default Exercise6;