<a href="https://npmcharts.com/compare/@wessberg/stringutil?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/%40wessberg%2Fstringutil.svg" height="20"></img></a>
<a href="https://david-dm.org/wessberg/stringutil"><img alt="Dependencies" src="https://img.shields.io/david/wessberg/stringutil.svg" height="20"></img></a>
<a href="https://www.npmjs.com/package/@wessberg/stringutil"><img alt="NPM Version" src="https://badge.fury.io/js/%40wessberg%2Fstringutil.svg" height="20"></img></a>
<a href="https://github.com/wessberg/stringutil/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/wessberg%2Fstringutil.svg" height="20"></img></a>
<a href="https://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-yellow.svg" height="20"></img></a>
<a href="https://www.patreon.com/bePatron?u=11315442"><img alt="Support on Patreon" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="20"></img></a>

# `@wessberg/stringutil`

> A collection of helper functions for working with strings

## Description

A collection of helper functions for working with strings.

## Install

### NPM

```
$ npm install @wessberg/stringutil
```

### Yarn

```
$ yarn add @wessberg/stringutil
```

## Usage

```typescript
import {camelCase, allIndexesOf} from "@wessberg/stringutil";
camelCase("my-string"); // returns 'myString'
camelCase("my string"); // returns 'myString'
camelCase("MY_STRING"); // returns 'myString'
camelCase("my-complex_string HAS a_SPACE"); // returns 'myComplexStringHasASpace'
allIndexesOf(/_/g, "my string has underscores _here_"); // returns [26, 31]
```

## Contributing

Do you want to contribute? Awesome! Please follow [these recommendations](./CONTRIBUTING.md).

## Maintainers

- <a href="https://github.com/wessberg"><img alt="Frederik Wessberg" src="https://avatars2.githubusercontent.com/u/20454213?s=460&v=4" height="11"></img></a> [Frederik Wessberg](https://github.com/wessberg): _Maintainer_

## Backers 🏅

[Become a backer](https://www.patreon.com/bePatron?u=11315442) and get your name, logo, and link to your site listed here.

## License 📄

MIT © [Frederik Wessberg](https://github.com/wessberg)
