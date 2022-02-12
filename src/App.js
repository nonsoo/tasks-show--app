import "./App.css";

import Tasks from "./Components/C/Tasks";
import Taco from "./Components/C/Taco";
import Burrito from "./Components/C/Burrito";
import Taquito from "./Components/C/Taquito";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Tasks />

      <Routes>
        <Route path="/" element={<Taco />} />
        <Route path="/Burrito" element={<Burrito />} />
        <Route path="/Taquito" element={<Taquito />} />
      </Routes>
    </div>
  );
}

export default App;
