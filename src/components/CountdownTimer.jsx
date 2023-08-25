import React, { useState, useEffect } from "react";
import Timer from "./Timer";
// import "../styles/timer.scss"

const CountdownTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(null);
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "public/1.webp",
    });

    const backgroundImage1 = 'public/1.webp';
    const backgroundImage2 = 'public/2.gif';
    const [bgImg, setBgImg] = useState(backgroundImage1)

    const handleChangeBg = () => {
        if (bgImg === backgroundImage1) {
            setBgImg(backgroundImage2);
        } else {
            setBgImg(backgroundImage1);
        }
    }

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
            setShowEndScreen({ ...showEndScreen, show: true });
            resetTimer();
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, isRunning, showEndScreen.show]);

    // Start Pause & Stop functions

    // Start
    function startTimer() {
        if (minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            setShowEndScreen({ ...showEndScreen, show: false });
        } else {
            window.alert("Please Add Time.");
        }
        if (bgImg === backgroundImage1) {
            setBgImg(backgroundImage2);
        } else {
            setBgImg(backgroundImage1);
        }
    }

    // Stop

    function stopTimer() {
        resetTimer();
        setShowEndScreen({ ...showEndScreen, show: false });
    }

    function resetTimer() {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    }

    // Handlers
    const changeSeconds = (e) => {
        event.preventDefault
        setSeconds(e.target.value);
    };
    const changeMinutes = (e) => {
        event.preventDefault
        setMinutes(e.target.value);
    };

    return (

        <div style={{ backgroundImage: `url(${bgImg})` }}>
            {showEndScreen.show && (
                <h1 className="title  text-light" >{showEndScreen.message}</h1>
            )}
            <Timer
                seconds={seconds}
                minutes={minutes}
                changeSeconds={changeSeconds}
                changeMinutes={changeMinutes}
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