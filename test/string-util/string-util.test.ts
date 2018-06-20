import {test} from "ava";
import {containsWhitespace, convertToAscii, isInCamelCase, isInKebabCase, isInPascalCase, isQuoted, unquote} from "../../src/string-util/string-util";

test("StringUtil () => Correctly determines if a string is in camelCase #1", t => {
	t.true(isInCamelCase("camelCase"));
});

test("StringUtil () => Correctly determines if a string is in camelCase #2", t => {
	t.false(isInCamelCase("PascalCase"));
});

test("StringUtil () => Correctly determines if a string is in camelCase #3", t => {
	t.false(isInCamelCase("kebab-case"));
});

test("StringUtil () => Correctly determines if a string is in PascalCase #1", t => {
	t.true(isInPascalCase("PascalCase"));
});

test("StringUtil () => Correctly determines if a string is in PascalCase #2", t => {
	t.false(isInPascalCase("camelCase"));
});

test("StringUtil () => Correctly determines if a string is in PascalCase #3", t => {
	t.false(isInPascalCase("kebab-case"));
});

test("StringUtil () => Correctly determines if a string is in kebab-case #1", t => {
	t.true(isInKebabCase("kebab-case"));
});

test("StringUtil () => Correctly determines if a string is in kebab-case #2", t => {
	t.false(isInKebabCase("camelCase"));
});

test("StringUtil () => Correctly determines if a string is in kebab-case #3", t => {
	t.false(isInKebabCase("PascalCase"));
});

test("StringUtil () => Correctly unquotes a quoted string #1", t => {
	t.deepEqual(unquote(`"unquoted"`), "unquoted");
});

test("StringUtil () => Correctly determines if a string contains whitespace #1", t => {
	t.true(containsWhitespace("foo "));
});

test("StringUtil () => Correctly determines if a string contains whitespace #2", t => {
	t.true(containsWhitespace("foo&nbsp;"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #3", t => {
	t.true(containsWhitespace(`
foo`));
});

test("StringUtil () => Correctly determines if a string contains whitespace #4", t => {
	t.true(containsWhitespace("\tfoo"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #5", t => {
	t.true(containsWhitespace("\rfoo"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #6", t => {
	t.true(containsWhitespace("foo bar"));
});

test("StringUtil () => Correctly determines if a string contains whitespace #7", t => {
	t.false(containsWhitespace("foo"));
});

test("StringUtil () => Correctly determines if a string is quoted #1", t => {
	t.true(isQuoted(`"foo"`));
});

test("StringUtil () => Correctly determines if a string is quoted #2", t => {
	t.true(isQuoted(`"      foo     "`));
});

test("StringUtil () => Correctly determines if a string is quoted #4", t => {
	t.false(isQuoted(`foo`));
});

test("StringUtil () => Correctly converts Unicode to ASCII #1", t => {
	t.false(convertToAscii("😵").includes("😵"));
});

test("StringUtil () => Correctly converts Unicode to ASCII #2", t => {
	t.deepEqual(convertToAscii("Fødselsåret"), "Foedselsaaret");
});