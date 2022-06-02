import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import MisProyectos from "./Component/MisProyectos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <MisProyectos />
    </div>
  );
}

export default App;
