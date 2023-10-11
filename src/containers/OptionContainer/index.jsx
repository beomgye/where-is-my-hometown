import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AssetInputForm,
  BuildingTypeForm,
  FinishForm,
  LocationForm,
  TradeForm
} from '@/components';

const OptionContainer = () => {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(0);
  const [subscription, setSubscription] = useState();

  const onGoBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const onSubmit = useCallback(
    (data) => {
      const nextStep = step + 1;
      if (nextStep === 3) {
        setSubscription(data);
      }
      setStep(nextStep);
    },
    [step]
  );

  const onRefreshButton = () => {
    setStep(1);
  };

  return (
    <>
      {step === 0 && <AssetInputForm control={control} onSubmit={handleSubmit(onSubmit)} />}
      {step === 1 && (
        <LocationForm control={control} onSubmit={handleSubmit(onSubmit)} onGoBack={onGoBack} />
      )}
      {step === 2 && (
        <TradeForm control={control} onSubmit={handleSubmit(onSubmit)} onGoBack={onGoBack} />
      )}
      {step === 3 && (
        <BuildingTypeForm control={control} onSubmit={handleSubmit(onSubmit)} onGoBack={onGoBack} />
      )}
      {step === 4 && (
        <FinishForm
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
          subscription={subscription}
          onRefreshButton={onRefreshButton}
        />
      )}
    </>
  );
};

export default OptionContainer;
