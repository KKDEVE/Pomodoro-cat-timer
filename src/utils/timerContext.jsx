// import React from 'react';

// const timerContext = React.createContext({
//     seconds: 0,
//     setSeconds: () => { },
//     minutes: 0,
//     setMinutes: () => { },
//     isRunning: null,
//     setIsRunning: () => { },
// });

// export default timerContext;

import { createContext, useContext, useState, useEffect } from "react";
import { Children } from "react";
import dayjs from 'dayjs';

const TimerContext = createContext();

function TimerProvider({ children }) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(null);

    const handleTimeChange = (time) => {
        const selectedTime = dayjs(time).format('mm:ss');
        const [selectedMinutes, selectedSeconds] = selectedTime.split(':');

        setMinutes(Number(selectedMinutes));
        setSeconds(Number(selectedSeconds));
    };


    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                } else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                }
            }, 1000);
        }

        if (minutes === 0 && seconds === 0) {
            resetTimer();
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, isRunning]);

    function startTimer() {
        if (minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
        } else {
            window.alert("Please Add Time.");
        }
    }
    function stopTimer() {
        resetTimer();
    }
    function resetTimer() {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    }

    return (
        <TimerContext.Provider
            value={{
                seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning, handleTimeChange, startTimer, stopTimer
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}
function useTimer() {
    const context = useContext(TimerContext)
    if (context === undefined) throw new Error("TimerContext was used outside of TimerProvider")
    return context;
}
export { TimerProvider, useTimer };