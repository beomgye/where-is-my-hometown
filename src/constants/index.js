export const Step = Object.freeze({
  ASSET: 0,
  LOCATION: 1,
  TRANSACTION: 2,
  BUILDING: 3,
  SUMMARY: 4,
  FINAL: 5
});

export const Transaction = Object.freeze({
  MONTHLY: 0,
  JEONSE: 1,
  SALE: 2
});

export const Building = Object.freeze({
  APRARTMENT: 0,
  TOWNHOUSE: 1,
  SINGLE_FAMILY_HOME: 2,
  HOUSING_COMPLEX: 3
});

export const StepOptions = Object.entries(Step).map(([step, index]) => ({
  step,
  index
}));

export const TransactionTypeOptions = Object.entries(Transaction).map(([label, value]) => ({
  label,
  value
}));

export const BuildingTypeOptions = Object.entries(Building).map(([label, value]) => ({
  label,
  value
}));