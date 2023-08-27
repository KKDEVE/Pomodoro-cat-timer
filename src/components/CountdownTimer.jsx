import React, { useState, useEffect, useContext } from "react";
import Timer from "./Timer";
import dayjs from 'dayjs';
import countdownTimerContext from "../utils/countdownTimerContext";
import { useTimer } from 'react-timer-hook';

const CountdownTimer = () => {
    // const [seconds, setSeconds] = useState(0);
    // const [minutes, setMinutes] = useState(0);
    // const [isRunning, setIsRunning] = useState(null);

    const { seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning } = useContext(countdownTimerContext);


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

    // Start
    function startTimer() {
        if (minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
        } else {
            window.alert("Please Add Time.");
        }
    }

    // Stop

    function stopTimer() {
        resetTimer();
    }

    function resetTimer() {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    }


    return (

        <div>

            <Timer
                seconds={seconds}
                minutes={minutes}
                // changeSeconds={changeSeconds}
                // changeMinutes={changeMinutes}
                handleTimeChange={handleTimeChange}
            />
            <br />



            {!isRunning && (
                <button className="btn btn-accept btn-lg" onClick={startTimer}>
                    start
                </button>
            )}
            <button className="btn btn-danger btn-lg" onClick={stopTimer}>
                stop
            </button>
        </div>
    );
}


export default CountdownTimer