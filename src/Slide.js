import React from "react";
import "./Foo.scss";

export function Slide(props) {
  return (
    <div className="Slide">
      <i className={"fa fa-fw fa-" + props.icon} />
      <div className="Text">{props.text}</div>
    </div>
  );
}
