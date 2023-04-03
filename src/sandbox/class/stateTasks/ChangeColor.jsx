import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div>
        <button onClick={() => setColor("yellow")}>yellow</button>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("blue")}>blue</button>
      </div>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: color,
          margin: "20px",
        }}
      ></div>
    </>
  );
}
