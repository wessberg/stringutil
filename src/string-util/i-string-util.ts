export interface IStringUtil {
	lowerCaseFirst (str: string): string;
	upperCaseFirst (str: string): string;
	isLowerCase (str: string): boolean;
	isUpperCase (str: string): boolean;
	startsWithQuote (str: string): boolean;
	endsWithQuote (str: string): boolean;
	isQuoted (str: string): boolean;
	isEmpty (str: string): boolean;
	allMatchesOf (regex: RegExp, str: string, startingFrom?: number): string[];
	allMatchObjectsOf (regex: RegExp, str: string, startingFrom?: number): RegExpMatchArray[];
	allMatchesAndCaptureGroupsOf (regex: RegExp, str: string, startingFrom?: number): string[][];
	allIndexesOf (regex: RegExp, str: string, startingFrom?: number): number[];
	trimAll (strings: string[]): string[];
	camelCase (str: string): string;
	pascalCase (str: string): string;
	capitalize (str: string): string;
	kebabCase (str: string): string;
	lowerCaseFirst (str: string): string;
	removeWhitespace (str: string, preserveSpaces?: boolean): string;
	trim (str: string): string;
	takeFrom (str: string, from: number|string): string;
	takeFromAfter (str: string, from: string): string;
}