import { BuildingProps } from '@/types/building';
import { StepProps } from '@/types/step';
import { TransactionProps } from '@/types/transaction';

export const Step = [
  {
    id: 0,
    value: '자산 입력'
  },
  {
    id: 1,
    value: '위치 선택'
  },
  {
    id: 2,
    value: '거래 방식'
  },
  {
    id: 3,
    value: '건물 유형'
  },
  {
    id: 4,
    value: '마무리 단계'
  },
  {
    id: 5,
    value: '결과'
  }
];

export const Transaction = [
  {
    id: 0,
    value: '월세'
  },
  {
    id: 1,
    value: '전세'
  },
  {
    id: 2,
    value: '매매'
  }
];

export const Building = [
  {
    id: 0,
    value: '아파트'
  },
  {
    id: 1,
    value: '연립'
  },
  {
    id: 2,
    value: '단독'
  },
  {
    id: 3,
    value: '주택종합'
  }
];

export const StepOptions: StepProps[] = Step.map(({ id, value }) => {
  return {
    id,
    value
  };
});

export const TransactionTypeOptions: TransactionProps[] = Transaction.map(({ id, value }) => {
  return {
    id,
    value
  };
});

export const BuildingTypeOptions: BuildingProps[] = Building.map(({ id, value }) => {
  return {
    id,
    value
  };
});
