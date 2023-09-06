import Home from "./Home";
import Hero from "./components/Hero";
import Header from "/src/components/header/Header";
import { TimerProvider, useTimer } from "./utils/timerContext";

function App() {
  return <div>
    <TimerProvider>
      <Header />
      <Hero />
      <Home />
    </TimerProvider>

  </div>;
}

export default App;
