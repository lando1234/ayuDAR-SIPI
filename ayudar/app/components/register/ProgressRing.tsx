import React from "react";

export interface ProgressRingProps {
  progressStep: number;
}

const ProgressRing = (props: ProgressRingProps) => {
  return (
    <div className={`progress-ring progress-step-${props.progressStep}`}>
      <div className="progress-text">{props.progressStep} de 3</div>
    </div>
  );
};

export default ProgressRing;
