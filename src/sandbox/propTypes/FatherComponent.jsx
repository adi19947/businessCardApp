import React from "react";
import ChildComponent from "./ChildComponent";

export default function FatherComponent() {
  return (
    <div>
      <ChildComponent name="Adi">Dan</ChildComponent>
    </div>
  );
}
