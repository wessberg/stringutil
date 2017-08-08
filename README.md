# StringUtil
[![NPM version][npm-version-image]][npm-version-url]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-url]

[dev-dependencies-url]: https://david-dm.org/wessberg/typedetector?type=dev

[dev-dependencies-image]: https://david-dm.org/hub.com/wessberg/StringUtil/dev-status.svg
[![deps][deps-image]][deps-url]

[deps-url]: https://david-dm.org/wessberg/typedetector

[deps-image]: https://david-dm.org/hub.com/wessberg/StringUtil/status.svg
[![License-mit][license-mit-image]][license-mit-url]

[license-mit-url]: https://opensource.org/licenses/MIT

[license-mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg

[npm-version-url]: https://www.npmjs.com/package/@wessberg/stringutil

[npm-version-image]: https://badge.fury.io/js/%40wessberg%2Fstringutil.svg
> A class for performing simple operations on strings.

## Installation
Simply do: `npm install @wessberg/stringutil`.

## Usage
```typescript
import {StringUtil} from "@wessberg/stringutil";
const stringUtil = new StringUtil();
stringUtil.camelCase("my-string"); // returns 'myString'
stringUtil.camelCase("my string"); // returns 'myString'
stringUtil.camelCase("MY_STRING"); // returns 'myString'
stringUtil.camelCase("my-complex_string HAS a_SPACE"); // returns 'myComplexStringHasASpace'
stringUtil.allIndexesOf(/_/g, "my string has underscores _here_"); // returns [26, 31]
```

## Changelog

<a name="1.0.7"></a>
## 1.0.7 (2017-08-08)

* 1.0.7 ([6d7be2d](https://github.com/wessberg/StringUtil/commit/6d7be2d))
* Added a few extra methods ([5e404f1](https://github.com/wessberg/StringUtil/commit/5e404f1))
* Bumped version ([5fd06a1](https://github.com/wessberg/StringUtil/commit/5fd06a1))



<a name="1.0.6"></a>
## 1.0.6 (2017-08-08)

* 1.0.6 ([87998bb](https://github.com/wessberg/StringUtil/commit/87998bb))
* Added a few extra methods ([ce4e873](https://github.com/wessberg/StringUtil/commit/ce4e873))



<a name="1.0.5"></a>
## 1.0.5 (2017-07-11)

* 1.0.5 ([750e48a](https://github.com/wessberg/StringUtil/commit/750e48a))
* Changed folder structure ([f517ee2](https://github.com/wessberg/StringUtil/commit/f517ee2))
* Switched to new ts-config setup. ([0173c2a](https://github.com/wessberg/StringUtil/commit/0173c2a))



<a name="1.0.4"></a>
## 1.0.4 (2017-07-10)

* added publish scripts ([30c6586](https://github.com/wessberg/StringUtil/commit/30c6586))
* added publish scripts)[@] ([3dc29ac](https://github.com/wessberg/StringUtil/commit/3dc29ac))



<a name="1.0.3"></a>
## 1.0.3 (2017-07-10)

* added publish scripts ([f0760aa](https://github.com/wessberg/StringUtil/commit/f0760aa))
* added publish scripts)[@] ([f7d8fd6](https://github.com/wessberg/StringUtil/commit/f7d8fd6))



<a name="1.0.2"></a>
## 1.0.2 (2017-07-10)

* (@added publish scripts)[@] ([e1264b6](https://github.com/wessberg/StringUtil/commit/e1264b6))
* @added publish scripts ([a9c417a](https://github.com/wessberg/StringUtil/commit/a9c417a))



<a name="1.0.1"></a>
## 1.0.1 (2017-07-10)

* 1.0.1 ([472bc86](https://github.com/wessberg/StringUtil/commit/472bc86))
* Added documentation. ([7ec0d7f](https://github.com/wessberg/StringUtil/commit/7ec0d7f))
* First commit ([01e96bc](https://github.com/wessberg/StringUtil/commit/01e96bc))
* process.argv[2] ([8a9b957](https://github.com/wessberg/StringUtil/commit/8a9b957))
* Update .gitignore ([b28e524](https://github.com/wessberg/StringUtil/commit/b28e524))
* Update package.json ([5ca4350](https://github.com/wessberg/StringUtil/commit/5ca4350))




## 1.0.6 (2017-08-08)

* 1.0.6 ([87998bb](https://github.com/wessberg/StringUtil/commit/87998bb))
* Added a few extra methods ([ce4e873](https://github.com/wessberg/StringUtil/commit/ce4e873))



<a name="1.0.5"></a>
## 1.0.5 (2017-07-11)

* 1.0.5 ([750e48a](https://github.com/wessberg/StringUtil/commit/750e48a))
* Changed folder structure ([f517ee2](https://github.com/wessberg/StringUtil/commit/f517ee2))
* Switched to new ts-config setup. ([0173c2a](https://github.com/wessberg/StringUtil/commit/0173c2a))



<a name="1.0.4"></a>
## 1.0.4 (2017-07-10)

* added publish scripts ([30c6586](https://github.com/wessberg/StringUtil/commit/30c6586))
* added publish scripts)[@] ([3dc29ac](https://github.com/wessberg/StringUtil/commit/3dc29ac))



<a name="1.0.3"></a>
## 1.0.3 (2017-07-10)

* added publish scripts ([f0760aa](https://github.com/wessberg/StringUtil/commit/f0760aa))
* added publish scripts)[@] ([f7d8fd6](https://github.com/wessberg/StringUtil/commit/f7d8fd6))



<a name="1.0.2"></a>
## 1.0.2 (2017-07-10)

* (@added publish scripts)[@] ([e1264b6](https://github.com/wessberg/StringUtil/commit/e1264b6))
* @added publish scripts ([a9c417a](https://github.com/wessberg/StringUtil/commit/a9c417a))



<a name="1.0.1"></a>
## 1.0.1 (2017-07-10)

* 1.0.1 ([472bc86](https://github.com/wessberg/StringUtil/commit/472bc86))
* Added documentation. ([7ec0d7f](https://github.com/wessberg/StringUtil/commit/7ec0d7f))
* First commit ([01e96bc](https://github.com/wessberg/StringUtil/commit/01e96bc))
* process.argv[2] ([8a9b957](https://github.com/wessberg/StringUtil/commit/8a9b957))
* Update .gitignore ([b28e524](https://github.com/wessberg/StringUtil/commit/b28e524))
* Update package.json ([5ca4350](https://github.com/wessberg/StringUtil/commit/5ca4350))




