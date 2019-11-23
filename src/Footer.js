import React from "react";
import CHEVRON_LEFT from "./assets/chevron-left.svg";
import CHEVRON_RIGHT from "./assets/chevron-right.svg";
import "./Foo.scss";

export function Footer(props) {
  return (
    <div className="Footer" data-step={props.step}>
      <div className="Button Button--prev" onClick={props.decreaseStep}>
        <img src={CHEVRON_LEFT} alt="chevron-left" />
      </div>
      <div className="Dots" data-step={props.step}>
        <div className="Dot" />
        <div className="Dot" />
        <div className="Dot" />
      </div>
      <div className="Button Button--next" onClick={props.increaseStep}>
        <img src={CHEVRON_RIGHT} alt="chevron-right" />
      </div>
    </div>
  );
}
