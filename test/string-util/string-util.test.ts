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

test("StringUtil () => Correctly unquotes a quoted string #1", t => {
	t.deepEqual(stringUtil.unquote(`"unquoted"`), "unquoted");
});

test("StringUtil () => Correctly determines if a string contains whitespace #1", t => {
	t.true(stringUtil.containsWhitespace("foo "));
});

test("StringUtil () => Correctly determines if a string contains whitespace #2", t => {
	t.true(stringUtil.containsWhitespace("foo&nbsp;"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #3", t => {
	t.true(stringUtil.containsWhitespace(`
foo`));
});

test("StringUtil () => Correctly determines if a string contains whitespace #4", t => {
	t.true(stringUtil.containsWhitespace("\tfoo"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #5", t => {
	t.true(stringUtil.containsWhitespace("\rfoo"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #6", t => {
	t.true(stringUtil.containsWhitespace("foo bar"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #7", t => {
	t.false(stringUtil.containsWhitespace("foo"));
});