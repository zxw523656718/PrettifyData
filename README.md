
# Simple Data Format

"PrettifyData is a versatile front-end library designed to simplify and enhance the way developers handle common data formatting tasks. It provides easy-to-use functions for currency and date formatting tailored to different locales, helping applications to maintain consistency and accuracy in displaying numerical and temporal data. Whether it's for financial figures, user interfaces, or logs, LocaleMagic ensures your data presentation is always on point."

This library provides easy-to-use functions for formatting currencies, dates, times, percentages, and abbreviating numbers. It's designed to help developers handle common data formatting tasks in various locales efficiently.


## Installation

```
npm install prettify-data
```

## Usage

```javascript
import { formatCurrency, formatDate } from 'prettify-data';

console.log(formatCurrency(1000, 'USD')); // $1,000.00
console.log(formatDate('2024-01-01')); // 1/1/2024
```
