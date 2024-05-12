const numberAbbreviator = (number, locale = 'en-US') => {
  const suffixes = ['K', 'M', 'B', 'T'];
  let suffixIndex = -1;
  while (number >= 1000) {
    number /= 1000;
    suffixIndex++;
  }
  return `${Number(number.toFixed(1))}${suffixes[suffixIndex] || ''}`;
};
