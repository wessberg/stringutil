import {IStringUtil} from "./i-string-util";

/**
 * A class for performing simple operations on strings.
 */
export class StringUtil implements IStringUtil {
	/**
	 * Unquotes a quoted string
	 * @param {string} str
	 * @returns {string}
	 */
	public unquote (str: string): string {
		return this.isQuoted(str) ? str.slice(1, str.length - 1) : str;
	}

	/**
	 * Returns true if the string is in camelCase
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isInCamelCase (str: string): boolean {
		return this.camelCase(str) === str;
	}

	/**
	 * Returns true if the string is in PascalCase
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isInPascalCase (str: string): boolean {
		return this.pascalCase(str) === str;
	}

	/**
	 * Returns true if the string is in kebab-case
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isInKebabCase (str: string): boolean {
		return this.kebabCase(str) === str;
	}

	/**
	 * Returns true if the string is in uppercase
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isLowerCase (str: string): boolean {
		return str.toLowerCase() === str;
	}

	/**
	 * Returns true if the string is in uppercase
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isUpperCase (str: string): boolean {
		return str.toUpperCase() === str;
	}

	/**
	 * Lowercases the first character of the string.
	 * @param {string} str
	 * @returns {string}
	 */
	public lowerCaseFirst (str: string): string {
		if (str.length < 2) return str.toLowerCase();
		const head = str.slice(0, 1);
		const tail = str.slice(1);
		return `${head.toLowerCase()}${tail}`;
	}

	/**
	 * Uppercases the first character of the string.
	 * @param {string} str
	 * @returns {string}
	 */
	public upperCaseFirst (str: string): string {
		if (str.length < 2) return str.toUpperCase();
		const head = str.slice(0, 1);
		const tail = str.slice(1);
		return `${head.toUpperCase()}${tail}`;
	}

	/**
	 * Returns true if the string is empty (has nothing but whitespace)
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isEmpty (str: string): boolean {
		return this.trim(str).length === 0;
	}

	/**
	 * Returns true if the given string starts with a quote.
	 * @param {string} str
	 * @returns {boolean}
	 */
	public startsWithQuote (str: string): boolean {
		return str.startsWith(`"`) || str.startsWith(`'`) || str.startsWith("`");
	}

	/**
	 * Returns true if the given string ends with a quote.
	 * @param {string} str
	 * @returns {boolean}
	 */
	public endsWithQuote (str: string): boolean {
		return str.endsWith(`"`) || str.endsWith(`'`) || str.endsWith("`");
	}

	/**
	 * Returns true if the given string is quoted.
	 * @param {string} str
	 * @returns {boolean}
	 */
	public isQuoted (str: string): boolean {
		const trimmed = this.removeWhitespace(str, true);
		return this.startsWithQuote(trimmed) && this.endsWithQuote(trimmed);
	}

	/**
	 * Returns all RegExp matches and capture groups for the given regular expression and string, optionally starting from a specific character.
	 * @param {RegExp} regex
	 * @param {string} str
	 * @param {number} startingFrom
	 * @returns {string[][]}
	 */
	public allMatchesAndCaptureGroupsOf (regex: RegExp, str: string, startingFrom: number = 0): string[][] {
		if (startingFrom < 0 || startingFrom > str.length) throw new RangeError(`Given 'startingFrom' value: ${ startingFrom } is out of bounds!`);
		const matches: string[][] = [];
		let match: RegExpExecArray|null;
		let currentString = str;
		while ((match = regex.exec(currentString)) != null) {
			if (match.index >= startingFrom) matches.push(match.slice(1));
			currentString = currentString.slice(currentString.indexOf(match[1]) + match[1].length);
		}
		return matches;
	}

	/**
	 * Returns all RegExp matches of the given regular expression on the given string, optionally starting from a specific index.
	 * @param {RegExp} regex
	 * @param {string} str
	 * @param {number} startingFrom
	 * @returns {string[]}
	 */
	public allMatchesOf (regex: RegExp, str: string, startingFrom: number = 0): string[] {
		if (startingFrom < 0 || startingFrom > str.length) throw new RangeError(`Given 'startingFrom' value: ${ startingFrom } is out of bounds!`);
		const matches: string[] = [];
		let match: RegExpExecArray|null;
		let currentString = str;
		while ((match = regex.exec(currentString)) != null) {
			if (match.index >= startingFrom) matches.push(match[1]);
			currentString = currentString.slice(currentString.indexOf(match[1]) + match[1].length);
		}
		return matches;
	}

	/**
	 * Returns all index matches of the provided Regular Expression on the provided string, optionally starting from a specific index.
	 * @param {RegExp} regex
	 * @param {string} str
	 * @param {number} startingFrom
	 * @returns {number[]}
	 */
	public allIndexesOf (regex: RegExp, str: string, startingFrom: number = 0): number[] {
		if (startingFrom < 0 || startingFrom > str.length) throw new RangeError(`Given 'startingFrom' value: ${ startingFrom } is out of bounds!`);
		const matches: number[] = [];
		let match: RegExpExecArray|null;
		while ((match = regex.exec(str)) != null) {
			if (match.index >= startingFrom) matches.push(match.index);
		}
		return matches;
	}

	/**
	 * Returns all match objects of the provided regular expression on the provided string, optionally starting from a specific index.
	 * @param {RegExp} regex
	 * @param {string} str
	 * @param {number} startingFrom
	 * @returns {RegExpMatchArray[]}
	 */
	public allMatchObjectsOf (regex: RegExp, str: string, startingFrom: number = 0): RegExpMatchArray[] {
		if (startingFrom < 0 || startingFrom > str.length) throw new RangeError(`Given 'startingFrom' value: ${ startingFrom } is out of bounds!`);
		const matches: RegExpExecArray[] = [];
		let match: RegExpExecArray|null;
		while ((match = regex.exec(str)) != null) {
			if (match.index >= startingFrom) matches.push(match);
		}
		return matches;
	}

	/**
	 * Trims all of the provided strings.
	 * @param {string[]} strings
	 * @returns {string[]}
	 */
	public trimAll (strings: string[]): string[] {
		return strings.map(str => this.trim(str));
	}

	/**
	 * camelCases the given string.
	 * @param {string} str
	 * @returns {string}
	 */
	public camelCase (str: string): string {
		return this.lowerCaseFirst(str
		// Replaces any - or _ characters with a space
			.replace(/[-_+]+/g, " ").replace(/[ ]{2,}/g, " ")
			// Removes any non alphanumeric characters
			.replace(/[^\w\sa-zæøåàáäâëêéèïîíìöòóôüúùû&]/gi, "").replace(/[A-Z]{2,}/g, $1 => $1.toLowerCase())
			// Uppercases the first character in each group immediately following a space
			// (delimited by spaces)
			.replace(/ (.)/g, $1 => $1.toUpperCase())
			// Removes spaces
			.replace(/ /g, ""));
	}

	/**
	 * PascalCases the given string.
	 * @param {string} str
	 * @returns {string}
	 */
	public pascalCase (str: string): string {
		return this.capitalize(this.camelCase(str));
	}

	/**
	 * Capitalizes the given string.
	 * @param {string} str
	 * @returns {string}
	 */
	public capitalize (str: string): string {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	}

	/**
	 * kebab-cases (dash-cases) the given string.
	 * @param {string} str
	 * @returns {string}
	 */
	public kebabCase (str: string): string {
		// Lower cases the string
		let _str = str;
		if (!/[a-zæøåàáäâëêéèïîíìöòóôüúùû]/.test(_str)) _str = str.toLowerCase();
		return _str.replace(/(?:_)[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]{2,}|[A-Z]{2,}(?=_)/g, $1 => ` ${ $1.toLowerCase() }`).replace(/[-_+]/g, " ").replace(/[ \t\r]*[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]+[ \t\r]+/g, $1 => ` ${ $1.toLowerCase() } `).replace(/[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]/g, $1 => ` ${ $1.toLowerCase() }`).replace(/^[ \t\r]+/g, "").replace(/\s{2,}/g, " ").replace(/\s+/g, "-");
	}

	/**
	 * Removes all whitespace from a string. If the second argument is truthy, it will preserve spaces.
	 * @param {string} str
	 * @param {boolean} [preserveSpaces=false]
	 * @returns {string}
	 */
	public removeWhitespace (str: string, preserveSpaces: boolean = false): string {

		// Convert tabs to spaces and remove anything but spaces.
		if (preserveSpaces) return str
			.replace(/&nbsp;/g, " ")
			.replace(/[\t]/g, " ")
			.replace(/[\n\r]/g, "")
			.replace(/[ ]{2,}/g, " ");

		// Remove any kind of whitespace.
		return str.replace(/[ \n\t\r]/g, "").replace(/&nbsp;/, "");
	}

	/**
	 * Returns true if the given string contains whitespace
	 * @param {string} str
	 * @returns {boolean}
	 */
	public containsWhitespace (str: string): boolean {
		return /(&nbsp;|\t|\n|\r|\s)/.test(str);
	}

	/**
	 * Trims a string. It works like String.prototype.trim, except it also handles HTML spaces (&nbsp;).
	 * @param {string} str
	 * @returns {string}
	 */
	public trim (str: string): string {
		let local = str.trim();
		while (local.startsWith("&nbsp;")) {
			local = local.slice("&nbsp;".length);
			local = local.trim();
		}
		while (local.endsWith("&nbsp;")) {
			local = local.slice(0, local.length - "&nbsp;".length);
			local = local.trim();
		}
		return local;
	}

	/**
	 * Slices a string from a specific index or string expression.
	 * @param {string} str
	 * @param {number | string} from
	 * @returns {string}
	 */
	public takeFrom (str: string, from: number|string): string {
		const index = typeof from === "number" ? from : str.indexOf(from);
		return str.slice(index);
	}

	/**
	 * Slices a string from after the string expression.
	 * @param {string} str
	 * @param {string} from
	 * @returns {string}
	 */
	public takeFromAfter (str: string, from: string): string {
		return this.takeFrom(str, from).slice(from.length);
	}

}

