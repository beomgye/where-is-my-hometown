import {
  AssetInputForm,
  BuildingTypeForm,
  Loading,
  LocationForm,
  SelectInfo,
  SummaryForm,
  TransactionTypeForm
} from '@/components';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import useFindMyHome from '@/hooks/useFindMyHome';
import useStepControl from '@/hooks/useStepControl';

export interface MultiFormProps {
  assets: number;
  buildingType: number;
  location: string;
  transactionType: number
}

const MultiFormContainer = () => {
  const { control, watch, handleSubmit, reset } = useForm<MultiFormProps>({
    defaultValues: {
      assets: 0,
      buildingType: 0,
      location: '주소를 입력해주세요.',
      transactionType: 0,
    }
  });

  const [bcode, setBcode] = useState('');
  const { result, setResult, isLoading, findMyHome } = useFindMyHome();
  const { step, decreaseStep, increaseStep, resetStep } = useStepControl();

  const onSubmit: SubmitHandler<MultiFormProps> = useCallback(
    async (data) => {
      if (step < 4) {
        increaseStep();
        console.log('data', data);
        return;
      }

      try {
        const response = await findMyHome({
          isKBApi: 0,
          property: watch('assets'),
          location: watch('location'),
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
    },
    [bcode, findMyHome, step, watch, increaseStep]
  );

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
          onGoBack={decreaseStep}
        />
      )}
      {step === 2 && (
        <TransactionTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={decreaseStep}
        />
      )}
      {step === 3 && (
        <BuildingTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={decreaseStep}
        />
      )}
      {step === 4 && (
        <SummaryForm
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onRefresh={onReset}
          onGoBack={decreaseStep}
        />
      )}
      {step === 5 && result ? <SelectInfo townList={result} onRefreshButton={onReset} /> : ''}
    </>
  );
};

export default MultiFormContainer;
