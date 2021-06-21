# random-int-memoized

## Install

```
$ npm install random-int-memoized
```

## Usage

### Import/Require random-int-memoized

```js
import { randomIntMemoized } from "random-int-memoized";
```

```js
const { randomIntMemoized } = require("random-int-memoized");
```

### Initialize random function and call it

```js
const random = randomIntMemoized(1, 5);
console.log(random(), random(), random(), random(), random());
//=> 5 2 4 1 3
```

## API

### randomIntMemoized(lowerBound, upperBound)

Returns a function that when called will generate and return a random integer between and including the lowerBound and upperBound.
The function will go through all numbers in the range before returning any given value twice.

## Help / Feedback / Bugs

### For help, feedback or, if you've found a bug please contact me at the following email address: [contact@mussinben.com](mailto:contact@mussinben.com).
