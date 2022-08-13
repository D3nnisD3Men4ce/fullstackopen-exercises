import React from "react";
import { useState } from "react";


const Exercise9 = () => {

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time)
    const [realTime, setRealTime] = useState(time)

    const updateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        return (setCurrentTime(newTime))
    }
    
    const updateRealtime = () => {
        let newTime = new Date().toLocaleTimeString();
        return (setRealTime(newTime))
    }
    
    setInterval(updateRealtime, 1000)

    return (
        <div className="container">

          <h1>{currentTime}</h1>
          <button onClick={updateTime}>Get Time</button>

          <h1>{realTime}</h1>
          
        </div>
      );
}

export default Exercise9;