# Sexagenary Cycle Converter

A simple JavaScript utility to convert a civil year (AD/BC) into its corresponding sexagenary cycle notation (Korean, Chinese, Japanese, Vietnamese).

## Installation

```bash
npm install sexagenary-cycle
```

## Supported Locales

- `kr` — Korean
- `cn` — Chinese
- `jp` — Japanese
- `vn` — Vietnamese

## Usage

### CommonJS

```js
const { getSexagenaryYear } = require("sexagenary-cycle");
```

### ES Modules

```js
import { getSexagenaryYear } from "./index.js";
```

```js
// AD year examples
console.log(getSexagenaryYear(1984, "kr")); // 갑자
console.log(getSexagenaryYear(1984, "cn")); // 甲子
console.log(getSexagenaryYear(1984, "jp")); // 甲子
console.log(getSexagenaryYear(1984, "vn")); // Giáp Tý

// BC year example
console.log(getSexagenaryYear(-1, "cn")); // 辛酉 (1 BC)
```

## API

### `getSexagenaryYear(year, locale)`

Converts a civil year into its sexagenary cycle string.

- **year** (`number`): Civil year as integer. Negative values represent BC years. `0` is not allowed (there is no year 0 in the historical calendar).
- **locale** (`string`): One of `kr`, `cn`, `jp`, `vn`.

Throws an error if:

- Year is not an integer or is 0.
- Locale is not supported.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/hwahyeon/sexagenary-cycle.git
cd sexagenary-cycle
npm install
```

Run tests:

```bash
npm test
```

## License

MIT License
