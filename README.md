## Installation

Install the dependencies and devDependencies and start the server.

```sh
npm i neka-simple-utilities
```

or

```sh
yarn add neka-simple-utilities
```

## List Utils

### Text Ellipsis

```javascript
TextEllipsis({ position: 'start', text: 'How To Make Money', length: 6 });
Result: '... Money';
```

#### Params

| Name     | Type                     | Default |
| -------- | ------------------------ | ------- |
| text\*   | string                   |         |
| length\* | number                   |         |
| position | 'start'\|'middle'\|'end' | 'end'   |

#

### Number Formatter

```javascript
NumberFormatter({ value: 10000000 });
Result: '10.000.000';
```

#### Params

| Name      | Type   | Default |
| --------- | ------ | ------- |
| value\*   | number |         |
| separator | string | '.'     |

#

### Kilo Formatter

```javascript
KiloFormatter({ value: 1000 });
Result: '1K';
```

#### Params

| Name    | Type   | Default |
| ------- | ------ | ------- |
| value\* | number |         |

#

### Copy To Clipboard (Async/Await)

```javascript
CopyToClipboard({ text: 'Test' });
Result: console.log('Test Copied');
```

#### Params

| Name   | Type   | Default |
| ------ | ------ | ------- |
| text\* | string |         |
