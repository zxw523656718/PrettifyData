class ChainFormatter {
  constructor(value, locale = 'en-US') {
    this.value = value;
    this.locale = locale;
    this.result = value;
  }

  formatCurrency(currency) {
    this.result = new Intl.NumberFormat(this.locale, { style: 'currency', currency }).format(this.result);
    return this;
  }

  formatPercent() {
    this.result = new Intl.NumberFormat(this.locale, { style: 'percent' }).format(this.result);
    return this;
  }

  abbreviateNumber() {
    this.result = numberAbbreviator(this.result, this.locale);
    return this;
  }

  getResult() {
    return this.result;
  }
}

export default ChainFormatter;
