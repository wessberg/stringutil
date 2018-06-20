# @wessberg/stringutil
[![NPM version][npm-version-image]][npm-version-url]
[![License-mit][license-mit-image]][license-mit-url]

[license-mit-url]: https://opensource.org/licenses/MIT

[license-mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg

[npm-version-url]: https://www.npmjs.com/package/@wessberg/stringutil

[npm-version-image]: https://badge.fury.io/js/%40wessberg%2Fstringutil.svg

## Installation
Simply do: `npm install @wessberg/stringutil`.

## Description

A collection of helper functions for working with strings.

## Usage
```typescript
import {camelCase, allIndexesOf} from "@wessberg/stringutil";
camelCase("my-string"); // returns 'myString'
camelCase("my string"); // returns 'myString'
camelCase("MY_STRING"); // returns 'myString'
camelCase("my-complex_string HAS a_SPACE"); // returns 'myComplexStringHasASpace'
allIndexesOf(/_/g, "my string has underscores _here_"); // returns [26, 31]
```




