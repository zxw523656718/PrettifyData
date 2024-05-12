
# Simple Data Format

"PrettifyData is a versatile front-end library designed to simplify and enhance the way developers handle common data formatting tasks. It provides easy-to-use functions for currency and date formatting tailored to different locales, helping applications to maintain consistency and accuracy in displaying numerical and temporal data. Whether it's for financial figures, user interfaces, or logs, LocaleMagic ensures your data presentation is always on point."

This library provides easy-to-use functions for formatting currencies, dates, times, percentages, and abbreviating numbers. It's designed to help developers handle common data formatting tasks in various locales efficiently.


## Installation

```
npm install prettify-data
```

## Usage

Usage
Below are some examples of how to use the library:

Formatting Currency
javascript
复制代码
import { formatCurrency } from 'simple-data-format';

console.log(formatCurrency(1000, 'USD')); // Outputs: $1,000.00
Formatting Date
javascript
复制代码
import { formatDate } from 'simple-data-format';

console.log(formatDate('2024-01-01')); // Outputs: 1/1/2024
Formatting Time
javascript
复制代码
import { formatTime } from 'simple-data-format';

console.log(formatTime('13:20')); // Outputs: 1:20 PM
Formatting Percent
javascript
复制代码
import { formatPercent } from 'simple-data-format';

console.log(formatPercent(0.123)); // Outputs: 12.3%
Abbreviating Numbers
javascript
复制代码
import { numberAbbreviator } from 'simple-data-format';

console.log(numberAbbreviator(1500)); // Outputs: 1.5K
Using Chain Formatter
javascript
复制代码
import { ChainFormatter } from 'simple-data-format';

const result = new ChainFormatter(1000)
  .formatCurrency('USD')
  .formatPercent()
  .getResult();

console.log(result); // Outputs: $1,000.00
```
