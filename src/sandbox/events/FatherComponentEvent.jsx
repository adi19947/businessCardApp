import React from "react";
import OnClickEvent from "./OnClickEvent";

export default function FatherComponentEvent() {
  const handleClick = () => {
    console.log("btn clicked ");
  };
  return (
    <>
      <OnClickEvent handleClick={handleClick} />
    </>
  );
}
