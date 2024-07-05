# @kxtxr/ts-guard

@kxtxr/ts-guard is a TypeScript utility package that provides a set of commonly used guard functions.

## Installation
Install @kxtxr/ts-guard via npm:
```shell
npm install @kxtxr/ts-guard
```

## Usage
Here is how you can use some of the guard functions:

```typescript
import { isPresent, isNumber } from '@kxtxr/ts-guard';

const x: number | undefined | number | string = foo.bar;

if (isNumber(x)) {
  // x is number
}

if (isPresent(x)) {
  // x is number or string
}
```
