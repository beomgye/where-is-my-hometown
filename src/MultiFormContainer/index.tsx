import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Loading from '@/components/common/Loading';
import AssetInputForm from '@/components/screens/AssetInputForm';
import BuildingTypeForm from '@/components/screens/BuildingTypeForm';
import LocationForm from '@/components/screens/LocationForm';
import SelectInfo from '@/components/screens/SelectInfo';
import SummaryForm from '@/components/screens/SummaryForm';
import TransactionTypeForm from '@/components/screens/TransactionTypeForm';

import useFindMyHome from '@/hooks/useFindMyHome';
import useStepControl from '@/hooks/useStepControl';

import { MultiFormProps } from '@/types/form';

const MultiFormContainer = () => {
  const { control, watch, handleSubmit, reset } = useForm<MultiFormProps>({
    defaultValues: {
      assets: undefined,
      buildingType: undefined,
      location: undefined,
      transactionType: undefined
    }
  });

  const [bcode, setBcode] = useState('');
  const { result, setResult, isLoading, findMyHome } = useFindMyHome();
  const { step, increaseStep, decreaseStep, resetStep } = useStepControl();

  const onSubmit: SubmitHandler<MultiFormProps> = useCallback(async () => {
    if (step < 4) {
      increaseStep();
      return;
    }

    try {
      const response = await findMyHome({
        isKBApi: 0,
        property: watch('assets'),
        neighborhoodCode: bcode,
        transactionType: watch('transactionType'),
        buildingType: watch('buildingType'),
        recommendedNumber: 1
      });

      if (response.status === 200) {
        increaseStep();
      } else {
        alert('추천 동네를 불러오는 데 실패했습니다.');
      }
    } catch (error) {
      console.log(error);
      alert('추천 동네를 불러오는 데 실패했습니다.');
    }
  }, [step, bcode, findMyHome, increaseStep, watch]);

  const onReset = () => {
    setResult('');
    resetStep();
    reset();
  };

  return (
    <>
      {isLoading && <Loading />}
      {step === 0 && <AssetInputForm control={control} onSubmit={handleSubmit(onSubmit)} />}
      {step === 1 && (
        <LocationForm
          control={control}
          setBcode={setBcode}
          onSubmit={handleSubmit(onSubmit)}
          goBackButton
          onGoBack={decreaseStep}
        />
      )}
      {step === 2 && (
        <TransactionTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          goBackButton
          onGoBack={decreaseStep}
        />
      )}
      {step === 3 && (
        <BuildingTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          goBackButton
          onGoBack={decreaseStep}
        />
      )}
      {step === 4 && (
        <SummaryForm
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          goBackButton
          onGoBack={decreaseStep}
          refreshButton
          onRefresh={onReset}
        />
      )}
      {step === 5 && result ? <SelectInfo townList={result} onRefreshButton={onReset} /> : ''}
    </>
  );
};

export default MultiFormContainer;
