import React from "react";
import "./Foo.scss";

export function Footer(props) {
  return (
    <div className="Footer" data-step={props.step}>
      <div className="Button Button--prev" onClick={props.decreaseStep}>
        <i className="fa fa-fw fa-chevron-left" />
      </div>
      <div className="Dots" data-step={props.step}>
        <div className="Dot" />
        <div className="Dot" />
        <div className="Dot" />
      </div>
      <div className="Button Button--next" onClick={props.increaseStep}>
        <i className="fa fa-fw fa-chevron-right" />
      </div>
    </div>
  );
}
