# @wessberg/stringutil

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




