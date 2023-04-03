import { string } from "prop-types";
import React from "react";

export default function ChildComponent({ name, children }) {
  return (
    <div>
      {name} {children}
    </div>
  );
}

ChildComponent.propTypes = {
  name: string,
};
