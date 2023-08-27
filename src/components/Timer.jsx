import React from "react";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';


export default function Timer({
    seconds,
    minutes,
    changeSeconds,
    changeMinutes,
    handleTimeChange
}) {


    return (
        <div className="timer-wrapper">
            <>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        // value={dayjs(`${minutes}:${seconds}`, 'mm-ss')}
                        onChange={handleTimeChange}
                        views={['minutes']}
                        format="mm"
                    />

                </LocalizationProvider>

                <div className="display">
                    <p>
                        {minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </p>
                </div>

            </>
        </div>
    );
}