import React from 'react';

const timerContext = React.createContext({
    seconds: 0,
    setSeconds: () => { },
    minutes: 0,
    setMinutes: () => { },
    isRunning: null,
    setIsRunning: () => { },
});

export default timerContext;