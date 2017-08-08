import {test} from "ava";
import {StringUtil} from "../../src/string-util/string-util";

const stringUtil = new StringUtil();

test("StringUtil () => Correctly determines if a string is in camelCase #1", t => {
	t.true(stringUtil.isInCamelCase("camelCase"));
});

test("StringUtil () => Correctly determines if a string is in camelCase #2", t => {
	t.false(stringUtil.isInCamelCase("PascalCase"));
});

test("StringUtil () => Correctly determines if a string is in camelCase #3", t => {
	t.false(stringUtil.isInCamelCase("kebab-case"));
});

test("StringUtil () => Correctly determines if a string is in PascalCase #1", t => {
	t.true(stringUtil.isInPascalCase("PascalCase"));
});

test("StringUtil () => Correctly determines if a string is in PascalCase #2", t => {
	t.false(stringUtil.isInPascalCase("camelCase"));
});

test("StringUtil () => Correctly determines if a string is in PascalCase #3", t => {
	t.false(stringUtil.isInPascalCase("kebab-case"));
});

test("StringUtil () => Correctly determines if a string is in kebab-case #1", t => {
	t.true(stringUtil.isInKebabCase("kebab-case"));
});

test("StringUtil () => Correctly determines if a string is in kebab-case #2", t => {
	t.false(stringUtil.isInKebabCase("camelCase"));
});

test("StringUtil () => Correctly determines if a string is in kebab-case #3", t => {
	t.false(stringUtil.isInKebabCase("PascalCase"));
});