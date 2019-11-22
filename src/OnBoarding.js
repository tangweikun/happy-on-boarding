import React, { useState } from "react";
import "./Foo.scss";
import { Slides } from "./Slides";
import { Footer } from "./Footer";

export function OnBoarding(props) {
  const [step, setStep] = useState(1);

  function increaseStep() {
    setStep(step + 1);
  }

  function decreaseStep() {
    setStep(step - 1);
  }

  return (
    <div className="on-boarding-wrapper">
      <div className="Background" data-step={step}></div>
      <Slides step={step} />
      <Footer
        increaseStep={increaseStep}
        decreaseStep={decreaseStep}
        step={step}
      />
    </div>
  );
}
