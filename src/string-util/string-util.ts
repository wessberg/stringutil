/**
 * Unquotes a quoted string
 * @param {string} str
 * @returns {string}
 */
import {ITruncateOptions} from "./i-truncate-options";

/**
 * Unquotes the given string - if it is quoted
 * @param {string} str
 * @returns {string}
 */
export function unquote (str: string): string {
	return isQuoted(str) ? str.slice(1, str.length - 1) : str;
}

/**
 * Returns true if the string is in camelCase
 * @param {string} str
 * @returns {boolean}
 */
export function isInCamelCase (str: string): boolean {
	return camelCase(str) === str;
}

/**
 * Returns true if the string is in PascalCase
 * @param {string} str
 * @returns {boolean}
 */
export function isInPascalCase (str: string): boolean {
	return pascalCase(str) === str;
}

/**
 * Returns true if the string is in kebab-case
 * @param {string} str
 * @returns {boolean}
 */
export function isInKebabCase (str: string): boolean {
	return kebabCase(str) === str;
}

/**
 * Returns true if the string is in uppercase
 * @param {string} str
 * @returns {boolean}
 */
export function isLowerCase (str: string): boolean {
	return str.toLowerCase() === str;
}

/**
 * Returns true if the string is in uppercase
 * @param {string} str
 * @returns {boolean}
 */
export function isUpperCase (str: string): boolean {
	return str.toUpperCase() === str;
}

/**
 * Lowercases the first character of the string.
 * @param {string} str
 * @returns {string}
 */
export function lowerCaseFirst (str: string): string {
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
export function upperCaseFirst (str: string): string {
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
export function isEmpty (str: string): boolean {
	return trim(str).length === 0;
}

/**
 * Returns true if the given string starts with a quote.
 * @param {string} str
 * @returns {boolean}
 */
export function startsWithQuote (str: string): boolean {
	return str.startsWith(`"`) || str.startsWith(`'`) || str.startsWith("`");
}

/**
 * Returns true if the given string ends with a quote.
 * @param {string} str
 * @returns {boolean}
 */
export function endsWithQuote (str: string): boolean {
	return str.endsWith(`"`) || str.endsWith(`'`) || str.endsWith("`");
}

/**
 * Returns true if the given string is quoted.
 * @param {string} str
 * @returns {boolean}
 */
export function isQuoted (str: string): boolean {
	const trimmed = removeWhitespace(str, true);
	return startsWithQuote(trimmed) && endsWithQuote(trimmed);
}

/**
 * Returns all index matches of the provided Regular Expression on the provided string, optionally starting from a specific index.
 * @param {RegExp} regexp
 * @param {string} str
 * @param {number} [from=0]
 * @returns {number[]}
 */
export function allIndexesOf (str: string, regexp: RegExp, from: number = 0): number[] {
	return matchAll(str, regexp, from).map(match => match.index);
}

/**
 * Matches all occurrences of the given RegExp, including capture groups, globally. Supports both global RegExps and non-global RegExps
 * @param {string} str
 * @param {RegExp} regexp
 * @param {number} [from=0]
 * @returns {RegExpExecArray[]}
 */
export function matchAll (str: string, regexp: RegExp, from: number = 0): RegExpExecArray[] {
	let flags = regexp.flags;
	if (!flags.includes("g")) {
		flags += "g";
	}

	// Normalize the regular expression and make sure it *does* include the Global ('g') flag
	const normalizedRegExp = new RegExp(regexp, flags);

	const matches: RegExpExecArray[] = [];

	while (true) {
		const match = normalizedRegExp.exec(str);
		if (match == null) break;
		if (match.index >= from) {
			matches.push(match);
		}
	}

	return matches;
}

/**
 * Trims all of the provided strings.
 * @param {string[]} strings
 * @returns {string[]}
 */
export function trimAll (strings: string[]): string[] {
	return strings.map(str => trim(str));
}

/**
 * camelCases the given string.
 * @param {string} str
 * @returns {string}
 */
export function camelCase (str: string): string {
	return lowerCaseFirst(str
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
export function pascalCase (str: string): string {
	return capitalize(camelCase(str));
}

/**
 * Capitalizes the given string.
 * @param {string} str
 * @returns {string}
 */
export function capitalize (str: string): string {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

/**
 * kebab-cases (dash-cases) the given string.
 * @param {string} str
 * @returns {string}
 */
export function kebabCase (str: string): string {
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
export function removeWhitespace (str: string, preserveSpaces: boolean = false): string {

	// Convert tabs to spaces and remove anything but spaces.
	if (preserveSpaces) {
		return str
			.replace(/&nbsp;/g, " ")
			.replace(/[\t]/g, " ")
			.replace(/[\n\r]/g, "")
			.replace(/[ ]{2,}/g, " ");
	}

	// Remove any kind of whitespace.
	return str
		.replace(/[ \n\t\r]/g, "")
		.replace(/&nbsp;/, "");
}

/**
 * Returns true if the given string contains whitespace
 * @param {string} str
 * @returns {boolean}
 */
export function containsWhitespace (str: string): boolean {
	return str.length !== removeWhitespace(str).length;
}

/**
 * Returns true if the given string contains nothing but whitespace
 * @param {string} str
 * @returns {boolean}
 */
export function containsOnlyWhitespace (str: string): boolean {
	return removeWhitespace(str).length === 0;
}

/**
 * Trims a string. It works like String.prototype.trim, except it also handles HTML spaces (&nbsp;).
 * @param {string} str
 * @returns {string}
 */
export function trim (str: string): string {
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
 * Replaces special characters like "æ" with "ae".
 * @param {string} str
 * @returns {string}
 */
export function convertToAscii (str: string): string {
	return str
		.replace(/ /g, "-")
		.replace(/_/g, "-")
		.replace(/[àáâäãą]/g, "a")
		.replace(/[èéêëę]/g, "e")
		.replace(/[ìíîïı]/g, "i")
		.replace(/[òóôõöőð]/g, "o")
		.replace(/[ùúûüŭů]/g, "u")
		.replace(/[çćčĉ]/g, "c")
		.replace(/[çćčĉ]/g, "c")
		.replace(/[żźž]/g, "z")
		.replace(/[śşšŝ]/g, "s")
		.replace(/[ñń]/g, "n")
		.replace(/[ýÿ]/g, "y")
		.replace(/[ğĝ]/g, "g")
		.replace(/ß/g, "ss")
		.replace(/æ/g, "ae")
		.replace(/ø/g, "oe")
		.replace(/å/g, "aa")
		// Remove all other unicode characters
		.replace(/[^\x00-\x7F]/g, "");
}

/**
 * Truncates the given text by the given max length and with the given omission character(s)
 * @param {string} text
 * @param {ITruncateOptions} [options]
 * @returns {string}
 */
export function truncate (text: string, {length = 30, omission = "..."}: Partial<ITruncateOptions> = {}): string {
	if (text.length <= length) return text;
	return `${text.slice(0, (length -(omission.length)))}${omission}`;
}