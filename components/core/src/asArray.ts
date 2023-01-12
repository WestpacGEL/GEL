/**
 * Converts a value into an Array.
 *
 * @param {any} value			- The value to convert.
 *
 * @return {array}				- The Array interpretation of the value.
 */
export function asArray<value>(value: value): Array<value> {
	return Array.isArray(value) ? value : [value];
}
