export const roundDecimal = (price) => {
  let [large, small] = String(price).split('.');
  if (!small) {
    small = '00';
  } else {
    small = small.slice(0, 2);
  }

  return `${large}.${small.padEnd(2, '0')}`;
};
