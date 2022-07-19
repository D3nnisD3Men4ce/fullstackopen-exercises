import { useState } from "react";

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        console.log('good', good + 1);
        setGood(prevGood => prevGood + 1)
    }

    
    const handleNeutral = () => {
        setNeutral(prevNeutral => prevNeutral + 1)
        console.log('neutral', neutral + 1);
    }

    
    const handleBad = () => {
        setBad(prevBad => prevBad + 1)
        console.log('bad', bad + 1);
    }


    return (
        <div>
            <h1>App5</h1>   
            <div>
                <h2>give feedback</h2>
                <button onClick={handleGood}>good</button>
                <button onClick={handleNeutral}>neutral</button>
                <button onClick={handleBad}>bad</button>
            </div>
            <div>
                <h2>statistics</h2>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
            </div>
            


        </div>
    )
}



export default Unicafe




