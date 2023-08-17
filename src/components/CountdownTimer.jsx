import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const CountdownTimer = () => {
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
                if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                }
            }, 6000);
        }

        if (minutes === 0) {
            setShowEndScreen({ ...showEndScreen, show: true });
            resetTimer();
        }
        return () => clearInterval(interval);
    }, [minutes, isRunning, showEndScreen.show]);

    // Start Pause & Stop functions

    // Start
    function startTimer() {
        if (minutes !== 0) {
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
        setMinutes(0);
    }

    // Handlers
    const changeMinutes = (e) => {
        setMinutes(e.target.value);
    };

    return (

        <div style={{ backgroundImage: `url(${bgImg})` }}>
            {showEndScreen.show && (
                <h1 className="title  text-light" >{showEndScreen.message}</h1>
            )}
            <Timer
                minutes={minutes}
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