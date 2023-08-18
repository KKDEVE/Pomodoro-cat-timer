import CountdownTimer from "./components/CountdownTimer";
import Home from "../src/Home/Home";
import Timer from "/src/components/Timer";
import Header from "/src/components/header/Header";

function App() {
  return <div>
    <Header />
    <Timer />
    <CountdownTimer />
    <Home />
  </div>;
}

export default App;
