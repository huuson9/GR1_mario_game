import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Exercise1 from "./page/Exercise1";
import Exercise2 from "./page/Exercise2";
import Exercise3 from "./page/Exercise3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bai1" element={<Exercise1 />} />
        <Route path="/bai2" element={<Exercise2 m={4} n={2} />} />
        <Route path="/bai3" element={<Exercise3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
