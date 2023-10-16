import { useState } from 'react';

const useStepControl = () => {
  const [step, setStep] = useState(0);

  const decreaseStep = () => {
    setStep((prev) => prev - 1);
  };

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const resetStep = () => {
    setStep(0);
  };

  return {
    step,
    decreaseStep,
    increaseStep,
    resetStep
  };
};

export default useStepControl;
