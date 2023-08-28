import React, { useState } from "react";
import Home from "./Home";
import Header from "/src/components/header/Header";
import Hero from "./components/Hero";

import CountdownTimer from "./components/CountdownTimer";
// import Timer from "./components/Timer";

function App() {


  return (
    <>
      <CountdownTimer />
      <Header />
      <Hero />
      <Home />
    </>

  )
}

export default App;
