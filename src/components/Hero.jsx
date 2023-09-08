import React, { useContext, useState } from 'react'
import { useTimer } from '../utils/timerContext';

const Hero = () => {
    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning } = useTimer();
    // console.log(useTimer)
    // console.log(minutes)
    return (
        <div className="hero">
            <div className="display">
                Hero Timer:
            </div>
            <p>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
            </p>
        </div>

    )
}

export default Hero