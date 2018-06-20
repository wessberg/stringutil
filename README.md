# @wessberg/stringutil
[![NPM version][npm-version-image]][npm-version-url]
[![License-mit][license-mit-image]][license-mit-url]

<a href="https://www.patreon.com/bePatron?u=11315442"><img height="30" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" /></a>

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

## Backers

[Become a backer](https://www.patreon.com/bePatron?c=1770586) and get your name, logo, and link to your site listed here. Your help is greatly appreciated!