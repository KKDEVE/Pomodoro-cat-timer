import React, { useContext } from 'react'
import timerContext from '../utils/timerContext'

const Hero = () => {
    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning } = useContext(timerContext);
    return (
        <div className="hero">
            <div className="display">
                {minutes}:{seconds}
            </div>
        </div>

    )
}

export default Hero