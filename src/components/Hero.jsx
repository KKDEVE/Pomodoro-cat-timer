import React, { useContext } from 'react'
import countdownTimerContext from '../utils/countdownTimerContext'

const Hero = () => {
    const { minutes, seconds } = useContext(countdownTimerContext)
    return (
        <div>
            <div>Hero </div>
            <div> {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}</div>

        </div>
    )
}

export default Hero