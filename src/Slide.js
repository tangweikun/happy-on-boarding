import React from "react";
import "./Foo.scss";

export function Slide(props) {
  return (
    <div className="slide">
      <div className="text">{props.text}</div>
    </div>
  );
}
