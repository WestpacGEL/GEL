import { useBrand } from '@westpac/core';
import PropTypes from 'prop-types';
import { CircleProps } from './Circle.types';

/** Circle: Circle */
export const Circle = ({
	tag: Tag = 'div',
	size = '30px',
	background,
	children,
	...props
}: CircleProps) => {
	const { COLORS } = useBrand();
	return (
		<Tag
			css={{
				width: size,
				height: size,
				borderRadius: '50%',
				backgroundColor: background ?? COLORS.background,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			{...props}
		>
			{children}
		</Tag>
	);
};

Circle.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Adds a background color
	 */
	background: PropTypes.string,
	/**
	 * JSX element to be render inside of circle
	 */
	children: PropTypes.node,
	/**
	 * Size of the circle
	 */
	size: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.shape({
					/**
					 * Iterator
					 */
					'__@iterator': PropTypes.func.isRequired,
					/**
					 * Returns an <a> HTML anchor element and sets the name attribute to the text value
					 * @param name
					 */
					anchor: PropTypes.func.isRequired,
					/**
					 * Takes an integer value and returns the item at that index,
					 * allowing for positive and negative integers.
					 * Negative integers count back from the last item in the array.
					 */
					at: PropTypes.func.isRequired,
					/**
					 * Returns a <big> HTML element
					 */
					big: PropTypes.func.isRequired,
					/**
					 * Returns a <blink> HTML element
					 */
					blink: PropTypes.func.isRequired,
					/**
					 * Returns a <b> HTML element
					 */
					bold: PropTypes.func.isRequired,
					/**
					 * Returns the character at the specified index.
					 * @param pos The zero-based index of the desired character.
					 */
					charAt: PropTypes.func.isRequired,
					/**
					 * Returns the Unicode value of the character at the specified location.
					 * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
					 */
					charCodeAt: PropTypes.func.isRequired,
					/**
					 * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
					 * value of the UTF-16 encoded code point starting at the string element at position pos in
					 * the String resulting from converting this object to a String.
					 * If there is no element at that position, the result is undefined.
					 * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
					 */
					codePointAt: PropTypes.func.isRequired,
					/**
					 * Returns a string that contains the concatenation of two or more strings.
					 * @param strings The strings to append to the end of the string.
					 */
					concat: PropTypes.func.isRequired,
					/**
					 * Returns true if the sequence of elements of searchString converted to a String is the
					 * same as the corresponding elements of this object (converted to a String) starting at
					 * endPosition – length(this). Otherwise returns false.
					 */
					endsWith: PropTypes.func.isRequired,
					/**
					 * Returns a <tt> HTML element
					 */
					fixed: PropTypes.func.isRequired,
					/**
					 * Returns a <font> HTML element and sets the color attribute value
					 */
					fontcolor: PropTypes.func.isRequired,
					/**
					 * Returns a <font> HTML element and sets the size attribute value
					 */
					fontsize: PropTypes.func.isRequired,
					/**
					 * Returns true if searchString appears as a substring of the result of converting this
					 * object to a String, at one or more positions that are
					 * greater than or equal to position; otherwise, returns false.
					 * @param searchString search string
					 * @param position If position is undefined, 0 is assumed, so as to search all of the String.
					 */
					includes: PropTypes.func.isRequired,
					/**
					 * Returns the position of the first occurrence of a substring.
					 * @param searchString The substring to search for in the string
					 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
					 */
					indexOf: PropTypes.func.isRequired,
					/**
					 * Returns an <i> HTML element
					 */
					italics: PropTypes.func.isRequired,
					/**
					 * Returns the last occurrence of a substring in the string.
					 * @param searchString The substring to search for.
					 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
					 */
					lastIndexOf: PropTypes.func.isRequired,
					/**
					 * Returns the length of a String object.
					 */
					length: PropTypes.number.isRequired,
					/**
					 * Returns an <a> HTML element and sets the href attribute value
					 */
					link: PropTypes.func.isRequired,
					/**
					 * Determines whether two strings are equivalent in the current locale.
					 * @param that String to compare to target string
					 */
					localeCompare: PropTypes.func.isRequired,
					/**
					 * Matches a string with a regular expression, and returns an array containing the results of that search.
					 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
					 */
					match: PropTypes.func.isRequired,
					/**
					 * Matches a string with a regular expression, and returns an iterable of matches
					 * containing the results of that search.
					 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
					 */
					matchAll: PropTypes.func.isRequired,
					/**
					 * Returns the String value result of normalizing the string into the normalization form
					 * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
					 * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
					 * is "NFC"
					 */
					normalize: PropTypes.func.isRequired,
					/**
					 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
					 * The padding is applied from the end (right) of the current string.
					 *
					 * @param maxLength The length of the resulting string once the current string has been padded.
					 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
					 *
					 * @param fillString The string to pad the current string with.
					 *        If this string is too long, it will be truncated and the left-most part will be applied.
					 *        The default value for this parameter is " " (U+0020).
					 */
					padEnd: PropTypes.func.isRequired,
					/**
					 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
					 * The padding is applied from the start (left) of the current string.
					 *
					 * @param maxLength The length of the resulting string once the current string has been padded.
					 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
					 *
					 * @param fillString The string to pad the current string with.
					 *        If this string is too long, it will be truncated and the left-most part will be applied.
					 *        The default value for this parameter is " " (U+0020).
					 */
					padStart: PropTypes.func.isRequired,
					/**
					 * Returns a String value that is made from count copies appended together. If count is 0,
					 * the empty string is returned.
					 * @param count number of copies to append
					 */
					repeat: PropTypes.func.isRequired,
					/**
					 * Replaces text in a string, using a regular expression or search string.
					 * @param searchValue A string to search for.
					 * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
					 */
					replace: PropTypes.func.isRequired,
					/**
					 * Finds the first substring match in a regular expression search.
					 * @param regexp The regular expression pattern and applicable flags.
					 */
					search: PropTypes.func.isRequired,
					/**
					 * Returns a section of a string.
					 * @param start The index to the beginning of the specified portion of stringObj.
					 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
					 * If this value is not specified, the substring continues to the end of stringObj.
					 */
					slice: PropTypes.func.isRequired,
					/**
					 * Returns a <small> HTML element
					 */
					small: PropTypes.func.isRequired,
					/**
					 * Split a string into substrings using the specified separator and return them as an array.
					 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
					 * @param limit A value used to limit the number of elements returned in the array.
					 */
					split: PropTypes.func.isRequired,
					/**
					 * Returns true if the sequence of elements of searchString converted to a String is the
					 * same as the corresponding elements of this object (converted to a String) starting at
					 * position. Otherwise returns false.
					 */
					startsWith: PropTypes.func.isRequired,
					/**
					 * Returns a <strike> HTML element
					 */
					strike: PropTypes.func.isRequired,
					/**
					 * Returns a <sub> HTML element
					 */
					sub: PropTypes.func.isRequired,
					/**
					 * Gets a substring beginning at the specified location and having the specified length.
					 * @param from The starting position of the desired substring. The index of the first character in the string is zero.
					 * @param length The number of characters to include in the returned substring.
					 */
					substr: PropTypes.func.isRequired,
					/**
					 * Returns the substring at the specified location within a String object.
					 * @param start The zero-based index number indicating the beginning of the substring.
					 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
					 * If end is omitted, the characters from start through the end of the original string are returned.
					 */
					substring: PropTypes.func.isRequired,
					/**
					 * Returns a <sup> HTML element
					 */
					sup: PropTypes.func.isRequired,
					/**
					 * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
					 */
					toLocaleLowerCase: PropTypes.func.isRequired,
					/**
					 * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
					 */
					toLocaleUpperCase: PropTypes.func.isRequired,
					/**
					 * Converts all the alphabetic characters in a string to lowercase.
					 */
					toLowerCase: PropTypes.func.isRequired,
					/**
					 * Returns a string representation of a string.
					 */
					toString: PropTypes.func.isRequired,
					/**
					 * Converts all the alphabetic characters in a string to uppercase.
					 */
					toUpperCase: PropTypes.func.isRequired,
					/**
					 * Removes the leading and trailing white space and line terminator characters from a string.
					 */
					trim: PropTypes.func.isRequired,
					/**
					 * Removes the trailing white space and line terminator characters from a string.
					 */
					trimEnd: PropTypes.func.isRequired,
					/**
					 * Removes the leading white space and line terminator characters from a string.
					 */
					trimLeft: PropTypes.func.isRequired,
					/**
					 * Removes the trailing white space and line terminator characters from a string.
					 */
					trimRight: PropTypes.func.isRequired,
					/**
					 * Removes the leading white space and line terminator characters from a string.
					 */
					trimStart: PropTypes.func.isRequired,
					/**
					 * Returns the primitive value of the specified object.
					 */
					valueOf: PropTypes.func.isRequired,
				}),
				PropTypes.string,
			])
		),
		PropTypes.number,
		PropTypes.shape({
			/**
			 * Iterator
			 */
			'__@iterator': PropTypes.func.isRequired,
			/**
			 * Returns an <a> HTML anchor element and sets the name attribute to the text value
			 * @param name
			 */
			anchor: PropTypes.func.isRequired,
			/**
			 * Takes an integer value and returns the item at that index,
			 * allowing for positive and negative integers.
			 * Negative integers count back from the last item in the array.
			 */
			at: PropTypes.func.isRequired,
			/**
			 * Returns a <big> HTML element
			 */
			big: PropTypes.func.isRequired,
			/**
			 * Returns a <blink> HTML element
			 */
			blink: PropTypes.func.isRequired,
			/**
			 * Returns a <b> HTML element
			 */
			bold: PropTypes.func.isRequired,
			/**
			 * Returns the character at the specified index.
			 * @param pos The zero-based index of the desired character.
			 */
			charAt: PropTypes.func.isRequired,
			/**
			 * Returns the Unicode value of the character at the specified location.
			 * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
			 */
			charCodeAt: PropTypes.func.isRequired,
			/**
			 * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
			 * value of the UTF-16 encoded code point starting at the string element at position pos in
			 * the String resulting from converting this object to a String.
			 * If there is no element at that position, the result is undefined.
			 * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
			 */
			codePointAt: PropTypes.func.isRequired,
			/**
			 * Returns a string that contains the concatenation of two or more strings.
			 * @param strings The strings to append to the end of the string.
			 */
			concat: PropTypes.func.isRequired,
			/**
			 * Returns true if the sequence of elements of searchString converted to a String is the
			 * same as the corresponding elements of this object (converted to a String) starting at
			 * endPosition – length(this). Otherwise returns false.
			 */
			endsWith: PropTypes.func.isRequired,
			/**
			 * Returns a <tt> HTML element
			 */
			fixed: PropTypes.func.isRequired,
			/**
			 * Returns a <font> HTML element and sets the color attribute value
			 */
			fontcolor: PropTypes.func.isRequired,
			/**
			 * Returns a <font> HTML element and sets the size attribute value
			 */
			fontsize: PropTypes.func.isRequired,
			/**
			 * Returns true if searchString appears as a substring of the result of converting this
			 * object to a String, at one or more positions that are
			 * greater than or equal to position; otherwise, returns false.
			 * @param searchString search string
			 * @param position If position is undefined, 0 is assumed, so as to search all of the String.
			 */
			includes: PropTypes.func.isRequired,
			/**
			 * Returns the position of the first occurrence of a substring.
			 * @param searchString The substring to search for in the string
			 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
			 */
			indexOf: PropTypes.func.isRequired,
			/**
			 * Returns an <i> HTML element
			 */
			italics: PropTypes.func.isRequired,
			/**
			 * Returns the last occurrence of a substring in the string.
			 * @param searchString The substring to search for.
			 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
			 */
			lastIndexOf: PropTypes.func.isRequired,
			/**
			 * Returns the length of a String object.
			 */
			length: PropTypes.number.isRequired,
			/**
			 * Returns an <a> HTML element and sets the href attribute value
			 */
			link: PropTypes.func.isRequired,
			/**
			 * Determines whether two strings are equivalent in the current locale.
			 * @param that String to compare to target string
			 */
			localeCompare: PropTypes.func.isRequired,
			/**
			 * Matches a string with a regular expression, and returns an array containing the results of that search.
			 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
			 */
			match: PropTypes.func.isRequired,
			/**
			 * Matches a string with a regular expression, and returns an iterable of matches
			 * containing the results of that search.
			 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
			 */
			matchAll: PropTypes.func.isRequired,
			/**
			 * Returns the String value result of normalizing the string into the normalization form
			 * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
			 * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
			 * is "NFC"
			 */
			normalize: PropTypes.func.isRequired,
			/**
			 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
			 * The padding is applied from the end (right) of the current string.
			 *
			 * @param maxLength The length of the resulting string once the current string has been padded.
			 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
			 *
			 * @param fillString The string to pad the current string with.
			 *        If this string is too long, it will be truncated and the left-most part will be applied.
			 *        The default value for this parameter is " " (U+0020).
			 */
			padEnd: PropTypes.func.isRequired,
			/**
			 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
			 * The padding is applied from the start (left) of the current string.
			 *
			 * @param maxLength The length of the resulting string once the current string has been padded.
			 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
			 *
			 * @param fillString The string to pad the current string with.
			 *        If this string is too long, it will be truncated and the left-most part will be applied.
			 *        The default value for this parameter is " " (U+0020).
			 */
			padStart: PropTypes.func.isRequired,
			/**
			 * Returns a String value that is made from count copies appended together. If count is 0,
			 * the empty string is returned.
			 * @param count number of copies to append
			 */
			repeat: PropTypes.func.isRequired,
			/**
			 * Replaces text in a string, using a regular expression or search string.
			 * @param searchValue A string to search for.
			 * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
			 */
			replace: PropTypes.func.isRequired,
			/**
			 * Finds the first substring match in a regular expression search.
			 * @param regexp The regular expression pattern and applicable flags.
			 */
			search: PropTypes.func.isRequired,
			/**
			 * Returns a section of a string.
			 * @param start The index to the beginning of the specified portion of stringObj.
			 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
			 * If this value is not specified, the substring continues to the end of stringObj.
			 */
			slice: PropTypes.func.isRequired,
			/**
			 * Returns a <small> HTML element
			 */
			small: PropTypes.func.isRequired,
			/**
			 * Split a string into substrings using the specified separator and return them as an array.
			 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
			 * @param limit A value used to limit the number of elements returned in the array.
			 */
			split: PropTypes.func.isRequired,
			/**
			 * Returns true if the sequence of elements of searchString converted to a String is the
			 * same as the corresponding elements of this object (converted to a String) starting at
			 * position. Otherwise returns false.
			 */
			startsWith: PropTypes.func.isRequired,
			/**
			 * Returns a <strike> HTML element
			 */
			strike: PropTypes.func.isRequired,
			/**
			 * Returns a <sub> HTML element
			 */
			sub: PropTypes.func.isRequired,
			/**
			 * Gets a substring beginning at the specified location and having the specified length.
			 * @param from The starting position of the desired substring. The index of the first character in the string is zero.
			 * @param length The number of characters to include in the returned substring.
			 */
			substr: PropTypes.func.isRequired,
			/**
			 * Returns the substring at the specified location within a String object.
			 * @param start The zero-based index number indicating the beginning of the substring.
			 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
			 * If end is omitted, the characters from start through the end of the original string are returned.
			 */
			substring: PropTypes.func.isRequired,
			/**
			 * Returns a <sup> HTML element
			 */
			sup: PropTypes.func.isRequired,
			/**
			 * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
			 */
			toLocaleLowerCase: PropTypes.func.isRequired,
			/**
			 * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
			 */
			toLocaleUpperCase: PropTypes.func.isRequired,
			/**
			 * Converts all the alphabetic characters in a string to lowercase.
			 */
			toLowerCase: PropTypes.func.isRequired,
			/**
			 * Returns a string representation of a string.
			 */
			toString: PropTypes.func.isRequired,
			/**
			 * Converts all the alphabetic characters in a string to uppercase.
			 */
			toUpperCase: PropTypes.func.isRequired,
			/**
			 * Removes the leading and trailing white space and line terminator characters from a string.
			 */
			trim: PropTypes.func.isRequired,
			/**
			 * Removes the trailing white space and line terminator characters from a string.
			 */
			trimEnd: PropTypes.func.isRequired,
			/**
			 * Removes the leading white space and line terminator characters from a string.
			 */
			trimLeft: PropTypes.func.isRequired,
			/**
			 * Removes the trailing white space and line terminator characters from a string.
			 */
			trimRight: PropTypes.func.isRequired,
			/**
			 * Removes the leading white space and line terminator characters from a string.
			 */
			trimStart: PropTypes.func.isRequired,
			/**
			 * Returns the primitive value of the specified object.
			 */
			valueOf: PropTypes.func.isRequired,
		}),
		PropTypes.string,
	]),
	/**
	 * The native tag that flexicell will be rendered
	 */
	tag: PropTypes.oneOf([
		'a',
		'abbr',
		'address',
		'animate',
		'animateMotion',
		'animateTransform',
		'area',
		'article',
		'aside',
		'audio',
		'b',
		'base',
		'bdi',
		'bdo',
		'big',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'center',
		'circle',
		'cite',
		'clipPath',
		'code',
		'col',
		'colgroup',
		'data',
		'datalist',
		'dd',
		'defs',
		'del',
		'desc',
		'details',
		'dfn',
		'dialog',
		'div',
		'dl',
		'dt',
		'ellipse',
		'em',
		'embed',
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDistantLight',
		'feDropShadow',
		'feFlood',
		'feFuncA',
		'feFuncB',
		'feFuncG',
		'feFuncR',
		'feGaussianBlur',
		'feImage',
		'feMerge',
		'feMergeNode',
		'feMorphology',
		'feOffset',
		'fePointLight',
		'feSpecularLighting',
		'feSpotLight',
		'feTile',
		'feTurbulence',
		'fieldset',
		'figcaption',
		'figure',
		'filter',
		'footer',
		'foreignObject',
		'form',
		'g',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hgroup',
		'hr',
		'html',
		'i',
		'iframe',
		'image',
		'img',
		'input',
		'ins',
		'kbd',
		'keygen',
		'label',
		'legend',
		'li',
		'line',
		'linearGradient',
		'link',
		'main',
		'map',
		'mark',
		'marker',
		'mask',
		'menu',
		'menuitem',
		'meta',
		'metadata',
		'meter',
		'mpath',
		'nav',
		'noindex',
		'noscript',
		'object',
		'ol',
		'optgroup',
		'option',
		'output',
		'p',
		'param',
		'path',
		'pattern',
		'picture',
		'polygon',
		'polyline',
		'pre',
		'progress',
		'q',
		'radialGradient',
		'rect',
		'rp',
		'rt',
		'ruby',
		's',
		'samp',
		'script',
		'section',
		'select',
		'slot',
		'small',
		'source',
		'span',
		'stop',
		'strong',
		'style',
		'sub',
		'summary',
		'sup',
		'svg',
		'switch',
		'symbol',
		'table',
		'tbody',
		'td',
		'template',
		'text',
		'textarea',
		'textPath',
		'tfoot',
		'th',
		'thead',
		'time',
		'title',
		'tr',
		'track',
		'tspan',
		'u',
		'ul',
		'use',
		'var',
		'video',
		'view',
		'wbr',
		'webview',
	]),
};
