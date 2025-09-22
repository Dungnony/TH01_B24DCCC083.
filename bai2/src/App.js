import React, { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorButton from "./components/ColorButton";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("yellow");

  function handlePick(color) {
    setSelectedColor(color);
  }

  return (
    <div className="container">
      <h1>Bài 2: Color Picker</h1>

      <div className="btn-row">
        <ColorButton label="Đỏ" value="red" onPick={handlePick} />
        <ColorButton label="Xanh" value="blue" onPick={handlePick} />
        <ColorButton label="Vàng" value="yellow" onPick={handlePick} />
      </div>

      <ColorBox color={selectedColor} />

      <p className="hint">
        Màu hiện tại: <strong>{selectedColor}</strong>
      </p>
    </div>
  );
}

export default App;
