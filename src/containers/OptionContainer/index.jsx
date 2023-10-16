import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AssetInputForm,
  BuildingTypeForm,
  Loading,
  LocationForm,
  SelectInfo,
  SummaryForm,
  TransactionTypeForm
} from '@/components';
import { Step } from '@/constants';
import useFindMyHome from '@/hooks/useFindMyHome';
import useStepControl from '@/hooks/useStepControl';

const OptionContainer = () => {
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      assets: '',
      location: '주소를 입력해주세요.'
    }
  });
  const [bcode, setBcode] = useState('');
  const { result, setResult, isLoading, findMyHome } = useFindMyHome();
  const { step, decreaseStep, increaseStep, resetStep } = useStepControl();

  const onSubmit = useCallback(() => {
    if (step !== Step.SUMMARY && step !== Step.FINAL) {
      increaseStep();
      return;
    }

    try {
      findMyHome({
        isKBApi: 0,
        property: watch('assets').replace(/,/g, ''),
        location: watch('location'),
        neighborhoodCode: bcode,
        transactionType: watch('transactionType'),
        buildingType: watch('buildingType'),
        recommendedNumber: 1
      });
      increaseStep();
    } catch (error) {
      console.log(error);
      alert('추천 동네를 불러오는 데 실패했습니다.');
    }
  }, [bcode, findMyHome, step, watch]);

  const onReset = () => {
    setResult('');
    resetStep();
    reset();
  };

  return (
    <>
      {isLoading && <Loading />}
      {step === Step.ASSET && (
        <AssetInputForm control={control} onSubmit={handleSubmit(onSubmit)} />
      )}
      {step === Step.LOCATION && (
        <LocationForm
          control={control}
          setBcode={setBcode}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={decreaseStep}
        />
      )}
      {step === Step.TRANSACTION && (
        <TransactionTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={decreaseStep}
        />
      )}
      {step === Step.BUILDING && (
        <BuildingTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={decreaseStep}
        />
      )}
      {step === Step.SUMMARY && (
        <SummaryForm
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onRefresh={onReset}
          onGoBack={decreaseStep}
        />
      )}
      {step === Step.FINAL && result ? (
        <SelectInfo townList={result} onRefreshButton={onReset} />
      ) : (
        ''
      )}
    </>
  );
};

export default OptionContainer;
