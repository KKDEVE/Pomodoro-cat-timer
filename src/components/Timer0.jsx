import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (seconds >= 10) {
            setFinished(true);
            updateBackgroundImage();
        }
    }, [seconds]);

    const updateBackgroundImage = async () => {
        const db = firebase.firestore();
        const docRef = db.collection('background').doc('image');

        try {
            await docRef.update({ imageUrl: 'new-background-image-url' });
        } catch (error) {
            console.log('Error updating background image:', error);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, '0');
        const remainingSeconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
    };

    return (
        <div className={`timer ${finished && 'finished'}`}>
            <h1>Timer</h1>
            <div className="timer-display">{formatTime(seconds)}</div>
        </div>
    );
};

export default Timer;
