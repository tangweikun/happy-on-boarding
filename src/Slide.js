import React from "react";
import "./Foo.scss";

export function Slide(props) {
  return (
    <div className="Slide">
      <div className="Text">{props.text}</div>
    </div>
  );
}
