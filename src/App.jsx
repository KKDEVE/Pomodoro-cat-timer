import React, { useState } from "react";
import Home from "./Home";
import Header from "/src/components/header/Header";
import countdownTimerContext from "./utils/countdownTimerContext"
import Hero from "./components/Hero";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  return (

    <countdownTimerContext.Provider value={{ seconds, setSeconds, minutes, setMinutes, isRunning, setIsRunning }}>

      <Header />
      <Hero />
      <Home />
    </countdownTimerContext.Provider>

  )
}

export default App;
