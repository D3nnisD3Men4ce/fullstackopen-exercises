import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    setTimeout(
        () => setCounter(counter + 1), 
        1000
    );
    
    // setInterval(() => {
    //     window.location.reload();
    //     setCounter(prevCount => prevCount + 1)
    // }, 1000);

    console.log(counter);
    
    return (
        <div>
            <h1>App2</h1>
            {counter}
        </div>
    )
}

export default Counter