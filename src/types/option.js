export const TransactionType = [
  {
    id: 0,
    name: '월세'
  },
  {
    id: 1,
    name: '전세'
  },
  {
    id: 2,
    name: '매매'
  }
];

export const BuildingType = [
  {
    id: 0,
    name: '아파트'
  },
  {
    id: 1,
    name: '연립'
  },
  {
    id: 2,
    name: '단독'
  },
  {
    id: 3,
    name: '주택종합'
  }
];

export const TransactionTypeOptions = TransactionType.map(({ id: value, name: label }) => {
  return {
    value,
    label
  };
});

export const BuildingTypeOptions = BuildingType.map(({ id: value, name: label }) => {
  return {
    value,
    label
  };
});
