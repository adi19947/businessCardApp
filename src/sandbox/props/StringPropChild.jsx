import React from "react";

export default function StringPropChild(props) {
  console.log(props);
  return (
    <>
      <div>Hello</div>
      <div>{props.data}</div>
    </>
  );
}
