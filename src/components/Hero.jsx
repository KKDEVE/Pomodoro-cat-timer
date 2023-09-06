import React, { useContext } from 'react'
import { useTimer } from '../utils/timerContext';

const Hero = () => {
    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning } = useTimer;
    return (
        <div className="hero">
            <div className="display">
                Hero Timer: {minutes}:{seconds}
            </div>
        </div>

    )
}

export default Hero