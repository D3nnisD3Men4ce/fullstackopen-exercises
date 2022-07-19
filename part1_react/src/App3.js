import { useState } from "react"

const ButtonCounter = () => {
    const [count, setCount] = useState(7)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    const setZero = () => {
        setCount(0)
    } 
    

    return (
        <div>
                <h1>App 3</h1>
                <button onClick={decrement}>-</button>
                <Display counter={count}/>
                <button onClick={increment}>+</button>
            <div>
                <button onClick={() => {setCount(0)}}>RESET</button>
            </div>
        </div>
    )
}


const Display = (props) => {
    // To refactor the code
    // Refactoring Makes Your Code Easier to Modify
    // It's recommended to write React components that are small and reusable across the application and even across projects.
    return (
        <span>{props.counter}</span>
    )
}

export default ButtonCounter