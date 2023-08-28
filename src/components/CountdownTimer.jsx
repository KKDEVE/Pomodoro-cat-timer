import React, { useState, useEffect, useContext } from "react";
import dayjs from 'dayjs';
import { useTimer } from 'react-timer-hook';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const CountdownTimer = () => {
    const time = new Date();
    let expiryTimestamp = time;
    const {
        seconds,
        minutes,
        // hours,
        // days,
        // isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
    })
    time.setSeconds(time.getSeconds() + seconds);
    time.setMinutes(time.getMinutes() + minutes);


    const handleTimeChange = () => {
        start()
    }
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    // value={dayjs(`${minutes}:${seconds}`, 'mm-ss')}
                    onChange={handleTimeChange}
                    views={['minutes', 'seconds']}
                    format="mm:ss"
                />
            </LocalizationProvider>
        </div>
    )
}

export default CountdownTimer