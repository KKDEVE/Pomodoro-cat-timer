import React, { useState } from 'react'
import CountdownTimer from './Timepicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const time = new Date();
    time.setSeconds(time.getSeconds() + { seconds });
    time.setMinutes(time.setMinutes() + { minutes });

    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 600);

    const handleTimeChange = (time) => {
        // const selectedTime = dayjs(time).format('mm');
        // setMinutes(Number(selectedTime));

        const selectedTime = dayjs(time).format('mm:ss');
        const [selectedMinutes, selectedSeconds] = selectedTime.split(':');

        setMinutes(Number(selectedMinutes));
        setSeconds(Number(selectedSeconds));
        console.log("hi")
    };


    return (
        <div>
            <CountdownTimer expiryTimestamp={time} minutes={minutes} seconds={seconds} totalSeconds={minutes * 60 + seconds} />


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
        </div>
    )
}

export default Timer