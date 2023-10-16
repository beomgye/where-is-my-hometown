import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AssetInputForm,
  BuildingTypeForm,
  LocationForm,
  SelectInfo,
  SummaryForm,
  TransactionTypeForm
} from '@/components';
import { Step } from '@/constants';
import useFindMyHome from '@/hooks/useFindMyHome';

const OptionContainer = () => {
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      assets: '',
      location: '주소를 입력해주세요.',
      transactionType: 0,
      buildingType: 0
    }
  });
  const [bcode, setBcode] = useState('');
  const [step, setStep] = useState(0);
  const { result, isLoading, findMyHome } = useFindMyHome();

  const onGoBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    console.info('step: ', step);
  }, [step]);

  const onSubmit = useCallback(async (data) => {
    console.info('data: ', data);
    console.info('step: ', step);
    if (step !== Step.SUMMARY && step !== Step.FINAL) {
      increaseStep();
      return;
    }
    try {
      console.info('step: ', step);
      const response = await findMyHome({
        isKBApi: 0,
        property: watch('assets').replace(/,/g, ''),
        location: watch('location'),
        neighborhoodCode: bcode,
        transactionType: watch('transactionType'),
        buildingType: watch('buildingType'),
        recommendedNumber: 1
      });
      console.info('response: ', response);
    } catch (error) {
      alert('추천 동네를 불러오는 데 실패했습니다.');
    }
    // [step, bcode]
  }, []);

  const onRefresh = () => {
    setStep(0);
    reset();
  };

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      {step === Step.ASSET && (
        <AssetInputForm control={control} onSubmit={handleSubmit(onSubmit)} />
      )}
      {step === Step.LOCATION && (
        <LocationForm
          control={control}
          setBcode={setBcode}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === Step.TRANSACTION && (
        <TransactionTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === Step.BUILDING && (
        <BuildingTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === Step.SUMMARY && (
        <SummaryForm
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
          onRefresh={onRefresh}
        />
      )}
      {step === Step.FINAL && (
        <SelectInfo townList={result} onGoBack={onGoBack} onRefreshButton={onRefresh} />
      )}
    </>
  );
};

export default OptionContainer;
