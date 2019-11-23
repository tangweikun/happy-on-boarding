import React from "react";
import CHEVRON_LEFT from "./assets/chevron-left.svg";
import CHEVRON_RIGHT from "./assets/chevron-right.svg";
import "./Foo.scss";

export function Footer(props) {
  return (
    <div className="footer" data-step={props.step}>
      <div className="button button-prev" onClick={props.decreaseStep}>
        <img src={CHEVRON_LEFT} alt="chevron-left" />
      </div>
      <div className="dots" data-step={props.step}>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="button button-next" onClick={props.increaseStep}>
        <img src={CHEVRON_RIGHT} alt="chevron-right" />
      </div>
    </div>
  );
}
