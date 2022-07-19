import { useState } from "react"


const Unicafe2 = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        all: 0
    })

    const handleGood = () => {
        setFeedback({
            ...feedback,
            good: feedback.good + 1,
            all: feedback.all + 1
        })
        console.log('good', feedback.good + 1);
    }


    const handleNeutral = () => {
        setFeedback({
            ...feedback,
            neutral: feedback.neutral + 1,
            all: feedback.all + 1
        })
        console.log('neutral', feedback.neutral + 1);
    }

    
    const handleBad = () => {
        setFeedback({
            ...feedback,
            bad: feedback.bad + 1,
            all: feedback.all + 1
        })
        console.log('bad', feedback.bad + 1);
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
            <Statistics feedback={feedback}/>
        </div>
    )
}


const Statistics = (props) => {
    console.log(props)
    if (props.feedback.all === 0) {
        return (
            <div>
                <h2>no feedback given</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>statistics</h2>
            <p>good {props.feedback.good}</p>
            <p>neutral {props.feedback.neutral}</p>
            <p>bad {props.feedback.bad}</p>
            <p>all {props.feedback.all}</p>
        </div>
    )
}


export default Unicafe2
