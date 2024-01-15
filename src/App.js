import "./App.css";
import PhaserScene from "./2d";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Page1 ,Page4, Page5, Page6, Page7 } from "./overlay";

function App() {
  const threeRef = useRef(null);
  const phaserRef = useRef(null);
  return (
    <div className="App"
      style={{
        backgroundColor : "black",
        width : "100vw",
        height : "100svh"
      }}
    >
      <PhaserScene ref={phaserRef} />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
      </Routes>
    </div>
  );
}

export default App;
