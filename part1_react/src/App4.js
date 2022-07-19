import { useState } from "react"

const ComplexState = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })
    
    const [allClicks, setAll] = useState([])
    // The application appears to work. However, it is forbidden in 
    // React to mutate state directly, since it can result in unexpected side effects. 
    // Changing state has to always be done by setting the state to a new object. 
    // If properties from the previous state object are not changed, they need to simply be copied, 
    // which is done by copying those properties into a new object, and setting that as the new state.

    const handleLeftClick = () => {
        setClicks({...clicks, left: clicks.left + 1})
        setAll(allClicks.concat('L'))
    }
    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right + 1})
        setAll(allClicks.concat('R'))

    }

    // The push() method is a generic method similar to call() or apply(). 
    // It will mutate your array (or object), pushing a new value into it.

    // The concat() method returns a new array, with the values merged. 
    // This also avoids mutation side effects.

    // console.log(allClicks);
    return (
      <div>
        <h1>App4</h1>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
        <History allClicks={allClicks}/>
      </div>
    )
}


const History = (props) => {
    if (props.allClicks.length === 0){
        return (
        <div>
            <h3>Press left or right to begin counting</h3>
        </div>
        )
    }

    return(
        <div>
            <p>{props.allClicks.join(' -> ')}</p>
        </div>
    )
}

export default ComplexState