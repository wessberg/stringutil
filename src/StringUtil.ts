import {IStringUtil} from "./interface/IStringUtil";

export class StringUtil implements IStringUtil {

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

	public allIndexesOf (regex: RegExp, str: string, startingFrom: number = 0): number[] {
		if (startingFrom < 0 || startingFrom > str.length) throw new RangeError(`Given 'startingFrom' value: ${ startingFrom } is out of bounds!`);
		const matches: number[] = [];
		let match: RegExpExecArray|null;
		while ((match = regex.exec(str)) != null) {
			if (match.index >= startingFrom) matches.push(match.index);
		}
		return matches;
	}

	public allMatchObjectsOf (regex: RegExp, str: string, startingFrom: number = 0): RegExpMatchArray[] {
		if (startingFrom < 0 || startingFrom > str.length) throw new RangeError(`Given 'startingFrom' value: ${ startingFrom } is out of bounds!`);
		const matches: RegExpExecArray[] = [];
		let match: RegExpExecArray|null;
		while ((match = regex.exec(str)) != null) {
			if (match.index >= startingFrom) matches.push(match);
		}
		return matches;
	}

	public trimAll (strings: string[]): string[] {
		return strings.map(str => str.trim());
	}

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

	public capitalize (str: string): string {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	}

	public kebabCase (str: string): string {
		// Lower cases the string
		let _str = str;
		if (!/[a-zæøåàáäâëêéèïîíìöòóôüúùû]/.test(_str)) _str = str.toLowerCase();
		return _str.replace(/(?:_)[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]{2,}|[A-Z]{2,}(?=_)/g, $1 => ` ${ $1.toLowerCase() }`).replace(/[-_+]/g, " ").replace(/[ \t\r]*[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]+[ \t\r]+/g, $1 => ` ${ $1.toLowerCase() } `).replace(/[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]/g, $1 => ` ${ $1.toLowerCase() }`).replace(/^[ \t\r]+/g, "").replace(/\s{2,}/g, " ").replace(/\s+/g, "-");
	}

	public lowerCaseFirst (str: string): string {
		return str.slice(0, 1).toLowerCase() + str.slice(1);
	}

	public removeWhitespace (str: string, preserveSpaces?: boolean): string {

		// Convert tabs to spaces and remove anything but spaces.
		if (preserveSpaces) return str
			.replace(/&nbsp;/g, " ")
			.replace(/[\t]/g, " ")
			.replace(/[\n\r]/g, "")
			.replace(/[ ]{2,}/g, " ");

		// Remove any kind of whitespace.
		return str.replace(/[ \n\t\r]/g, "").replace(/&nbsp;/, "");
	}

	public trim (str: string): string {
		let local = str.trim();
		while (local.startsWith("&nbsp;")) 	{
			local = local.slice("&nbsp;".length);
			local = local.trim();
		}
		while (local.endsWith("&nbsp;")) {
			local = local.slice(0, local.length - "&nbsp;".length);
			local = local.trim();
		}
		return local;
	}

	public takeFrom (str: string, from: number|string): string {
		const index = typeof from === "number" ? from : str.indexOf(from);
		return str.slice(index);
	}

	public takeFromAfter (str: string, from: string): string {
		return this.takeFrom(str, from).slice(from.length);
	}

}

