import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  AssetInputForm,
  BuildingTypeForm,
  FinishForm,
  LocationForm,
  SelectInfo,
  TransactionTypeForm
} from '@/components';

const OptionContainer = () => {
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      assets: '',
      location: '장소를 입력해주세요'
    }
  });
  const [bcode, setBcode] = useState('');
  const [step, setStep] = useState(0);
  const [option, setOption] = useState({});
  const [townList, setTownList] = useState([]);

  const onGoBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const onSubmit = useCallback(
    async (data) => {
      const nextStep = step + 1;
      const assets = data.assets.replace(/,/g, '');

      if (nextStep === 4) {
        setOption({
          isKBApi: 0,
          property: assets,
          location: data.location,
          neighborhoodCode: bcode,
          transactionType: data.transactionType,
          buildingType: data.buildingType,
          recommendedNumber: 1
        });
      }

      if (nextStep === 5) {
        const { location, ...restOfOption } = option;

        console.log(restOfOption);
        axios
          .post('/whereismyneighborhood', restOfOption, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((res) => {
            setTownList(res.data);
            console.log(res.data);
            setStep(nextStep);
          })
          .catch((err) => {
            alert('추천 동네를 불러오는 데 실패했습니다.');
            console.log(err);
          });
      }

      if (nextStep !== 5) {
        setStep(nextStep);
      }
    },
    [step, bcode]
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
          control={control}
          setBcode={setBcode}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === 2 && (
        <TransactionTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === 3 && (
        <BuildingTypeForm
          control={control}
          watch={watch}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
        />
      )}
      {step === 4 && (
        <FinishForm
          option={option}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
          onRefresh={onRefresh}
        />
      )}
      {step === 5 && (
        <SelectInfo townList={townList} onGoBack={onGoBack} onRefreshButton={onRefresh} />
      )}
    </>
  );
};

export default OptionContainer;
