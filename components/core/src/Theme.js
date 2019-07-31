/* @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Global, css, jsx } from '@emotion/core';
import merge from 'lodash.merge';

// TODO: is there a useful "default" value we should add here?
export const ThemeContext = createContext();

export const useTheme = () => {
	const themeObject = useContext(ThemeContext);
	const errorMessage = `GEL components require that you wrap your application with the <GEL /> theme provider from @westpac/core.`;

	if (!themeObject) {
		throw new Error(errorMessage);
	}

	return themeObject;
};

// ==============================
// Utils
// ==============================

const Brand = ({ children, ...props }) => {
	const { colors, body, type } = useTheme();

	// Global reset styling
	const styleReset = {
		// Document
		//
		// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
		// 2. Change the default font family in all browsers.
		// 3. Correct the line height in all browsers.
		// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
		// 5. Change the default tap highlight to be completely transparent in iOS.

		'*, *:before, *:after': {
			boxSizing: 'border-box', // 1
		},

		html: {
			fontFamily: 'sans-serif', // 2
			lineHeight: 1.15, // 3
			WebkitTextSizeAdjust: '100%', // 4
			WebkitTapHighlightColor: 'transparent', // 5
		},

		// Shim for "new" HTML5 structural elements to display correctly (IE10, older browsers)
		'article, aside, figcaption, figure, footer, header, hgroup, main, nav, section': {
			display: 'block',
		},

		// Body
		//
		// 1. Remove the margin in all browsers.
		// 2. As a best practice, apply a default `background-color`.
		// 3. Set an explicit initial text-align value so that we can later use
		//    the `inherit` value on things like `<th>` elements.

		body: {
			margin: 0, // 1
			backgroundColor: '#fff', // 2
			textAlign: 'left', // 3
			fontSize: '1rem', // Refer to document
		},

		// Globally reset all focus styling (applied as needed)
		':focus': {
			outline: 'none',
		},

		//
		// Typography
		//

		/**
		 * Correct the font size and margin on `h1` elements within `section` and
		 * `article` contexts in Chrome, Firefox, and Safari.
		 */

		h1: {
			fontSize: '2em',
			margin: '0.67em 0',
		},

		//
		// Links
		//

		a: {
			backgroundColor: 'transparent', // Remove the gray background on active links in IE 10.
		},

		//
		// Forms
		//

		label: {
			display: 'inline-block',
		},

		'input, button, select, optgroup, textarea': {
			margin: 0, //Remove the margin in FF and Safari
			fontFamily: 'inherit',
			fontSize: 'inherit',
			lineHeight: 'inherit',
		},

		textarea: {
			overflow: 'auto', // Remove the default vertical scrollbar in IE.
			// Textareas should really only resize vertically so they don't break their (horizontal) containers.
			resize: 'vertical',
		},

		fieldset: {
			// Browsers set a default `min-width: min-content;` on fieldsets,
			// unlike e.g. `<div>`s, which have `min-width: 0;` by default.
			// So we reset that to ensure fieldsets behave more like a standard block element.
			// See https://github.com/twbs/bootstrap/issues/12359
			// and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
			minWidth: 0,
			// Reset the default outline behavior of fieldsets so they don't affect page layout.
			padding: 0,
			margin: 0,
			border: 0,
		},

		// 1. Correct the text wrapping in Edge and IE.
		// 2. Correct the color inheritance from `fieldset` elements in IE.
		legend: {
			display: 'block',
			width: '100%',
			maxWidth: '100%', // 1
			padding: 0,
			marginBottom: '.5rem',
			// @include font-size(1.5rem),
			fontSize: 'inherit',
			lineHeight: 'inherit',
			color: 'inherit', // 2
			whiteSpace: 'normal', // 1
		},

		//
		// Correct element displays
		//

		template: {
			display: 'none', // Add the correct display in IE
		},

		// Always hide an element with the `hidden` HTML attribute (from PureCSS).
		// Needed for proper display in IE 10-.
		'[hidden]': {
			display: 'none !important',
		},
	};

	// Typography styling
	const styleType = {
		// Document
		html: {
			fontSize: type.fontSize, //10px
		},

		// Global type styling
		body: {
			fontFamily: type.body.fontFamily,
			fontWeight: type.body.fontWeight,
			fontSize: type.body.fontSize, //1.4rem (14px)
			lineHeight: type.body.lineHeight, //1.428571429
			color: type.body.color,
			fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
		},

		// Class access to our font families
		'.body-font': {
			fontFamily: type.body.fontFamily,
		},
		'.brand-font': {
			fontFamily: type.brand.fontFamily,
		},

		// Headings
		'h1, h2, h3, h4, h5, h6': {
			...type.headings,
		},

		// Paragraphs
		p: {
			...type.p,
		},

		// Definition lists
		dl: {
			...type.dl,
		},
		dt: {
			...type.dt,
		},
		dd: {
			...type.dd,
		},

		// Abbreviation
		'abbr[title]': {
			...type.abbr,
		},

		address: {
			...type.address,
		},

		blockquote: {
			...type.blockquote,
		},

		// Mark
		mark: {
			...type.mark,
		},

		// Text selection
		'::selection': {
			...type.selection,
		},

		// Links
		a: {
			...type.link.default,

			':hover, :focus': {
				...type.link.hover,
			},
		},

		// Focus (outline) styling
		// TODO
		'a, h1, h2, h3, h4, h5, h6': {
			':focus': {
				...type.link.focus,
			},
		},
	};

	return (
		<>
			<Global styles={merge(styleReset, styleType)} />
			{children}
		</>
	);
};

// ==============================
// Component
// ==============================

export const GEL = ({ brand, children, ...props }) => {
	return (
		<ThemeContext.Provider value={brand} {...props}>
			<Brand>{children}</Brand>
		</ThemeContext.Provider>
	);
};

GEL.propTypes = {
	// TODO `object` --> `shape`
	brand: PropTypes.oneOfType([
		PropTypes.shape({
			breakpoints: PropTypes.shape({
				sm: PropTypes.number,
				md: PropTypes.number,
				lg: PropTypes.number,
			}),
			colors: PropTypes.shape({
				background: PropTypes.string,
				border: PropTypes.string,
				borderDark: PropTypes.string,
				focus: PropTypes.string,
				heading: PropTypes.string,
				light: PropTypes.string,
				muted: PropTypes.string,
				neutral: PropTypes.string,
				text: PropTypes.string,

				// reserved
				success: PropTypes.string,
				information: PropTypes.string,
				warning: PropTypes.string,
				danger: PropTypes.string,

				// nested
				primary: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				hero: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				neutral: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				faint: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				success: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				information: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				warning: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				danger: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
			}),
			type: PropTypes.object, // TODO
			spacing: PropTypes.object, // TODO
		}),
		PropTypes.func,
	]),
};
