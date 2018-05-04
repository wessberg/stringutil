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
	 * Returns all index matches of the provided Regular Expression on the provided string, optionally starting from a specific index.
	 * @param {RegExp} regexp
	 * @param {string} str
	 * @param {number} [from=0]
	 * @returns {number[]}
	 */
	public allIndexesOf (str: string, regexp: RegExp, from: number = 0): number[] {
		return this.matchAll(str, regexp, from).map(match => match.index);
	}

	/**
	 * Matches all occurrences of the given RegExp, including capture groups, globally. Supports both global RegExps and non-global RegExps
	 * @param {string} str
	 * @param {RegExp} regexp
	 * @param {number} [from=0]
	 * @returns {RegExpExecArray[]}
	 */
	public matchAll (str: string, regexp: RegExp, from: number = 0): RegExpExecArray[] {
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
	public containsWhitespace (str: string): boolean {
		return str.length !== this.removeWhitespace(str).length;
	}

	/**
	 * Returns true if the given string contains nothing but whitespace
	 * @param {string} str
	 * @returns {boolean}
	 */
	public containsOnlyWhitespace (str: string): boolean {
		return this.removeWhitespace(str).length === 0;
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
}

