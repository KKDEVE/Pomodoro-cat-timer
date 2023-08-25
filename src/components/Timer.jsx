import React from "react";

export default function Timer({
    seconds,
    minutes,
    changeSeconds,
    changeMinutes,
}) {
    return (
        <div className="timer-wrapper">
            <>
                <button className="stop-watch " > </button>

                <div className="d-flex flex-column">
                    <label>mm</label>
                    <input onChange={changeMinutes} />
                    {/* value={minutes} */}
                </div>
                <div className="d-flex flex-column">
                    <label>ss</label>
                    <input onChange={changeSeconds} />
                    {/* value={seconds} */}
                </div>
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