import React from "react";
import { Transition } from "react-transition-group";
import CalculateCompletionPercentage from "./Form/calculateCompPercentage";

const StepBar = () => {
  const completionPercentage = Math.round(CalculateCompletionPercentage());

  const duration = 300; // animasyon süresi (ms)
  const defaultStyle = {
    transition: `width ${duration}ms ease-in-out`,
    width: 0,
    height: "8px",
    backgroundColor: "#4B5563",
    borderRadius: "9999px",
  };
  const transitionStyles = {
    entering: { width: 0 },
    entered: { width: `${completionPercentage}%` },
  };

  return (
    <div className="relative w-56 h-2 bg-silver items-center flex mb-2 rounded-full">
      <Transition in={true} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
    </div>
  );
};

export default StepBar;