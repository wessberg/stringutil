# StringUtil
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




