import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function CountdownTimer({ expiryTimestamp, minutes, seconds }) {
    const {
        totalSeconds,
        isRunning,
        start,
        pause,
        resume,
        restart,

    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div>
            <div>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }}>Restart</button>
        </div>
    );
}
