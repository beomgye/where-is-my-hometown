import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AssetInputForm,
  BuildingTypeForm,
  FinishForm,
  LocationForm,
  TradeForm
} from '@/components';

const OptionContainer = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      assets: '',
      location: ''
    }
  });
  const [bcode, setBcode] = useState('');
  const [step, setStep] = useState(0);
  const [option, setOption] = useState({});

  const onGoBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const onSubmit = useCallback(
    (data) => {
      const nextStep = step + 1;
      if (nextStep === 4) {
        const tradeType = data.trade
          ? Object.keys(data.trade).filter((key) => data.trade[key])
          : [];
        const buildingType = data.buildingType
          ? Object.keys(data.buildingType).filter((key) => data.buildingType[key])
          : [];

        setOption({
          assets: data.assets,
          location: data.location,
          tradeType,
          bcode,
          buildingType
        });
      }
      setStep(nextStep);
    },
    [step]
  );

  useEffect(() => {
    console.log(option);
  }, [option]);

  const onRefresh = () => {
    setStep(0);
    setOption({});
    reset();
  };

  return (
    <>
      {step === 0 && <AssetInputForm control={control} onSubmit={handleSubmit(onSubmit)} />}
      {step === 1 && (
        <LocationForm
          setBcode={setBcode}
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === 2 && (
        <TradeForm control={control} onSubmit={handleSubmit(onSubmit)} onGoBack={onGoBack} />
      )}
      {step === 3 && (
        <BuildingTypeForm control={control} onSubmit={handleSubmit(onSubmit)} onGoBack={onGoBack} />
      )}
      {step === 4 && <FinishForm onGoBack={onGoBack} onRefresh={onRefresh} option={option} />}
    </>
  );
};

export default OptionContainer;
