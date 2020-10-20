/**
 * All functions for generating vanilla styles for use with the blender
 *
 * recurseStyles	- Recursively get the paths to a props styles
 * styleReconciler	- Generate prop styles
 * getModifier		- Get passed props
 */
import get from 'lodash.get';
import set from 'lodash.set';

/**
 * Recursively get the paths to unique styles
 *
 * @param {object} base			- default component styles
 * @param {object} modified 	- passed prop styles
 * @param {array} diff 			- current style object path
 *
 * @return {array}				- nested array of paths e.g. [['key1'], ['key2'], ['level1', 'level2'], ['level1', 'level2', 'level3']]
 */
function recurseStyles(base, modified, diff = []) {
	const curr = [...diff];

	Object.keys(modified).forEach((key) => {
		if (modified[key] instanceof Object && modified[key].constructor === Object && base[key]) {
			const nested = recurseStyles(base[key], modified[key], [...curr, key]).filter(
				(n) => Array.isArray(n) && n[n.length - 1] !== key
			);

			if (nested.length) diff.push(...nested);
		} else if (modified[key] !== base[key]) {
			diff.push([...curr, key]);
		}
	});

	return diff;
}

/**
 * Generate prop styles
 *
 * @param {object} base 		- default component styles
 * @param {object} modified 	- passed prop styles
 *
 * @return {object}					- style object
 */
export function styleReconciler(base, modified) {
	const diff = recurseStyles(base, modified);
	const styles = diff.reduce((acc, curr) => {
		set(acc, curr, get(modified, curr));
		return acc;
	}, {});

	return styles;
}

/**
 * Get passed props
 *
 * @param {object} defaultProps		- components default props
 * @param {object} props 			- passed props
 *
 * @return {array}					- unique passed props
 */
export function getModifier(defaultProps, props) {
	return Object.keys(props).filter((m) => props[m] !== defaultProps[m]);
}

/**
 * Transform given string to title case
 *
 * @param {string} str		- text to transform
 *
 * @return {string}			- text in title case
 */
export const titleCase = (str) =>
	str
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
