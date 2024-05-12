const formatTime = (time, locale = 'en-US', options = {}) => {
  const defaultOptions = { hour: 'numeric', minute: 'numeric', ...options };
  return new Intl.DateTimeFormat(locale, defaultOptions).format(new Date(`1970-01-01T${time}Z`));
};

export default formatTime;
