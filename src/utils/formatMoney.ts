export const formatMoney = (x) => {
  if (typeof x === 'number') {
    const formattedValue = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  }
  if (typeof x === 'string') {
    const parsed = parseFloat(x.replace(/,/g, ''));
    if (!Number.isNaN(parsed)) {
      const formattedValue = parsed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return formattedValue;
    }
  }
  return x;
};
