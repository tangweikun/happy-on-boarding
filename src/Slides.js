import React from "react";
import "./Foo.scss";
import { Slide } from "./Slide";

export function Slides(props) {
  return (
    <div className="Slides" data-step={props.step}>
      <div className="Wrapper">
        <Slide
          text="The first step of onboarding, that is a thing."
          icon="comments-o"
        />
        <Slide
          icon="calendar-plus-o"
          text="Second step of onboarding, showing the things."
        />
        <Slide
          icon="gears"
          text="Final step of onboarding. Weeee, carousels!"
        />
      </div>
    </div>
  );
}