export interface IStringUtil {
	allMatchesOf (regex: RegExp, str: string, startingFrom?: number): string[];
	allMatchObjectsOf (regex: RegExp, str: string, startingFrom?: number): RegExpMatchArray[];
	allMatchesAndCaptureGroupsOf (regex: RegExp, str: string, startingFrom?: number): string[][];
	allIndexesOf (regex: RegExp, str: string, startingFrom?: number): number[];
	trimAll (strings: string[]): string[];
	camelCase (str: string): string;
	capitalize (str: string): string;
	kebabCase (str: string): string;
	lowerCaseFirst (str: string): string;
	removeWhitespace (str: string, preserveSpaces?: boolean): string;
	trim (str: string): string;
	takeFrom (str: string, from: number|string): string;
	takeFromAfter (str: string, from: string): string;
}