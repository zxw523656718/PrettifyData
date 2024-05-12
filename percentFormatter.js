const formatPercent = (number, locale = 'en-US', options = {}) => {
  const defaultOptions = { style: 'percent', ...options };
  return new Intl.NumberFormat(locale, defaultOptions).format(number);
};

export default formatPercent;
