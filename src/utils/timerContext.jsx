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

import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

function TimerProvider({ children }) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(null);

    <TimerContext.Provider
        value={{
            seconds,
            setSeconds,
            minutes,
            setMinutes,
            isRunning,
            setIsRunning
        }}
    >
        {children}
    </TimerContext.Provider>


}
function useTimer() {
    const context = useContext(TimerContext)

    if (context === undefined) throw new Error("TimerContext was used outside of TimerProvider")
    return context;
}
export { TimerProvider, useTimer };