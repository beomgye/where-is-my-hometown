import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  AssetInputForm,
  BuildingTypeForm,
  LocationForm,
  SelectInfo,
  SummaryForm,
  TransactionTypeForm
} from '@/components';
import { Step } from '@/constants';

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
  const [option, setOption] = useState({});
  const [townList, setTownList] = useState([]);

  const onGoBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const onSubmit = useCallback(
    async (data) => {
      const nextStep = step + 1;
      const assets = data.assets.replace(/,/g, '');

      if (nextStep === Step.SUMMARY) {
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

      if (nextStep === Step.FINAL) {
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
      if (nextStep !== Step.FINAL) {
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
          option={option}
          onSubmit={handleSubmit(onSubmit)}
          onGoBack={onGoBack}
          onRefresh={onRefresh}
        />
      )}
      {step === Step.FINAL && (
        <SelectInfo townList={townList} onGoBack={onGoBack} onRefreshButton={onRefresh} />
      )}
    </>
  );
};

export default OptionContainer;
