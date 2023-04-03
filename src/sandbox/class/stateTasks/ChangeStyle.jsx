import React, { useState } from "react";

export default function ChangeStyle() {
  const [width, setWidth] = useState(0);
  return (
    <>
      <input
        type="range"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />

      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: "red",
          border: width + "px solid black",
          margin: "20px",
        }}
      ></div>
    </>
  );
}
