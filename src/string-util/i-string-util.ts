export interface IStringUtil {
	lowerCaseFirst (str: string): string;
	upperCaseFirst (str: string): string;
	isLowerCase (str: string): boolean;
	isUpperCase (str: string): boolean;
	startsWithQuote (str: string): boolean;
	endsWithQuote (str: string): boolean;
	isQuoted (str: string): boolean;
	isEmpty (str: string): boolean;
	isInCamelCase (str: string): boolean;
	isInPascalCase (str: string): boolean;
	isInKebabCase (str: string): boolean;
	allIndexesOf (str: string, regexp: RegExp, from?: number): number[];
	matchAll (str: string, regexp: RegExp, from?: number): RegExpExecArray[];
	trimAll (strings: string[]): string[];
	camelCase (str: string): string;
	pascalCase (str: string): string;
	capitalize (str: string): string;
	kebabCase (str: string): string;
	lowerCaseFirst (str: string): string;
	removeWhitespace (str: string, preserveSpaces?: boolean): string;
	containsWhitespace (str: string): boolean;
	containsOnlyWhitespace (str: string): boolean;
	trim (str: string): string;
	unquote (str: string): string;
}