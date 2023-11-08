import { Dispatch, SetStateAction, useState } from 'react';

interface UseStepControlProps {
  step: number;
  decreaseStep: () => void;
  increaseStep: () => void;
  resetStep: () => void;
}

const useStepControl = (): UseStepControlProps => {
  const [step, setStep]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

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
