import React, { useState, useEffect } from "react";
// import Timer from "./Timer";
import dayjs from 'dayjs';
// import "../styles/timer.scss"
import { useTimer } from "../utils/timerContext";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import dayjs from 'dayjs';

const CountdownTimer = () => {
    // const [seconds, setSeconds] = useState(0);
    // const [minutes, setMinutes] = useState(0);
    // const [isRunning, setIsRunning] = useState(null);
    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning, handleTimeChange, startTimer, stopTimer } = useTimer()

    // const handleTimeChange = (time) => {
    //     const selectedTime = dayjs(time).format('mm:ss');
    //     const [selectedMinutes, selectedSeconds] = selectedTime.split(':');

    //     setMinutes(Number(selectedMinutes));
    //     setSeconds(Number(selectedSeconds));
    // };


    // useEffect(() => {
    //     let interval;
    //     if (isRunning) {
    //         interval = setInterval(() => {
    //             if (seconds > 0) {
    //                 setSeconds((seconds) => seconds - 1);
    //             } else if (minutes > 0) {
    //                 setMinutes((minutes) => minutes - 1);
    //                 setSeconds(59);
    //             }
    //         }, 1000);
    //     }

    //     if (minutes === 0 && seconds === 0) {
    //         resetTimer();
    //     }
    //     return () => clearInterval(interval);
    // }, [seconds, minutes, isRunning]);

    // function startTimer() {
    //     if (minutes !== 0 || seconds !== 0) {
    //         setIsRunning(true);
    //     } else {
    //         window.alert("Please Add Time.");
    //     }
    // }
    // function stopTimer() {
    //     resetTimer();
    // }
    // function resetTimer() {
    //     setIsRunning(false);
    //     setSeconds(0);
    //     setMinutes(0);
    // }
    return (
        <div>

            {/* <Timer
                seconds={seconds}
                minutes={minutes}
                setSeconds={setSeconds}
                setMinutes={setMinutes}
                handleTimeChange={handleTimeChange}
            /> */}

            <>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        // value={dayjs(`${minutes}:${seconds}`, 'mm-ss')}
                        onChange={handleTimeChange}
                        views={['minutes', 'seconds']}
                        format="mm:ss"
                    />

                </LocalizationProvider>

                <div className="display">
                    <p>
                        {minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </p>
                </div>

            </>

            <br />
            {
                !isRunning && (
                    <button className="btn btn-accept btn-lg" onClick={startTimer}>
                        start
                    </button>
                )
            }
            <button className="btn btn-danger btn-lg" onClick={stopTimer}>
                stop
            </button>
        </div >
    );
}


export default CountdownTimer