import React, { useState, useEffect } from "react";
// import Timer from "./Timer";
import dayjs from 'dayjs';
// import "../styles/timer.scss"
import { useTimer } from "../utils/timerContext";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const CountdownTimer = ({ timerId }) => {
    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning, handleTimeChange, startTimer, stopTimer, activeTask, setActiveTask } = useTimer();

    let timer = null;
    if (timerId === activeTask) {
        timer = <Timer />;
    }

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    onChange={handleTimeChange}
                    views={['minutes', 'seconds']}
                    format="mm:ss"
                />
            </LocalizationProvider>
            <button className="btn btn-accept btn-lg" onClick={() => startTimer(timerId)}>
                start
            </button>
            <button className="btn btn-danger btn-lg" onClick={stopTimer}>
                stop
            </button>
            {timer}
        </div>
    );
}


export const Timer = () => {
    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning, handleTimeChange, startTimer, stopTimer, activeTask, setActiveTask,
        elapsedMinutes, setElapsedMinutes,
        allElapsedMinutes, setAllElapsedMinutes
    } = useTimer()
    // const [elapsedMinutes, setElapsedMinutes] = useState(0);

    // useEffect(() => {
    //     if (isRunning && seconds === 0) {
    //         setElapsedMinutes((prevMinutes) => prevMinutes + 1);
    //     }
    // }, [seconds, isRunning]);
    return (
        <div >
            {
                <div className="display">
                    <p>
                        {minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </p>
                    <p>Minutes finished: {allElapsedMinutes[activeTask]} points</p>
                </div>
            }
        </div >
    )

}