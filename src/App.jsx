import Home from "./Home";
import Hero from "./components/Hero";
import Header from "/src/components/header/Header";
import { useState } from "react";
import { TimerProvider, useTimer } from "./utils/timerContext";
import { Store } from "./components/Store";

function App() {
  const [showTodo, setShowTodo] = useState(false);
  const [showStore, setShowStore] = useState(false);

  return <div style={{ backgroundColor: "darkgrey" }}>
    <TimerProvider>
      <Header openTodo={() => setShowTodo(!showTodo)} openStore={() => setShowStore(!showStore)} />
      <Hero />
      <Store showStore={showStore} />
      <Home showTodo={showTodo} />
    </TimerProvider>

  </div>;
}

export default App;
