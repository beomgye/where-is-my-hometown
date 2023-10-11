export const TradeType = [
  {
    id: 1,
    name: '전세'
  },
  {
    id: 2,
    name: '월세'
  },
  {
    id: 3,
    name: '매매'
  }
];

export const BuildingType = [
  {
    id: 1,
    name: '아파트'
  },
  {
    id: 2,
    name: '연립'
  },
  {
    id: 3,
    name: '단독'
  },
  {
    id: 4,
    name: '오피스텔'
  }
];

export const TradeTypeOptions = TradeType.map(({ id: value, name: label }) => {
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
