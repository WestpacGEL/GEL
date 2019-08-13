/** @jsx jsx */

import React from 'react';
import { Global, jsx } from '@emotion/core';
import { useTheme, useIsKeyboardUser } from './Theme';
import { paint } from './utils';

import merge from 'lodash.merge';

export const Core = ({ children }) => {
	const { colors, breakpoints, font, typography } = useTheme();
	const isKeyboardUser = useIsKeyboardUser();
	const mq = paint(breakpoints);

	console.log(`core: ${isKeyboardUser}`);

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

		// Suppress the focus outline on elements that cannot be accessed via keyboard.
		// This prevents an unwanted focus outline from appearing around elements that
		// might still respond to pointer events.
		//
		// Credit: https://github.com/suitcss/base
		'[tabindex="-1"]:focus': {
			outline: '0 !important',
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
	const styleTypography = {
		// Document
		html: {
			fontSize: typography.fontSize, //10px
		},

		// Global type styling
		body: {
			fontFamily: typography.body.fontFamily,
			fontWeight: typography.body.fontWeight,
			fontSize: typography.body.fontSize, //1.4rem (14px)
			lineHeight: typography.body.lineHeight, //1.428571429
			color: typography.body.color,
			fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
		},

		// Globally reset all focus styling, only apply if keyboard user
		':focus': {
			...(isKeyboardUser ? typography.link.focus : { outline: 0 }),
		},

		// Class access to our font families
		'.body-font': {
			fontFamily: typography.body.fontFamily,
		},
		'.brand-font': {
			fontFamily: typography.brand.fontFamily,
		},

		// Headings
		'h1, h2, h3, h4, h5, h6': {
			...typography.headings,
		},

		// Paragraphs
		p: {
			...typography.p,
		},

		// Definition lists
		dl: {
			...typography.dl,
		},
		dt: {
			...typography.dt,
		},
		dd: {
			...typography.dd,
		},

		// Abbreviation
		'abbr[title]': {
			...typography.abbr,
		},

		address: {
			...typography.address,
		},

		blockquote: {
			...typography.blockquote,
		},

		// Mark
		mark: {
			...typography.mark,
		},

		// Text selection
		'::selection': {
			...typography.selection,
		},

		// Links
		a: {
			...typography.link.default,

			':hover': {
				...typography.link.hover,
			},
		},
	};

	// Font @fontface styling
	const styleFont = font;

	// Text extension styling
	const styleTextExtensions = {
		// Lead text
		'.lead': {
			...typography.lead,
		},

		// Text alignments
		'.text-left': {
			textAlign: 'left',
		},
		'.text-right': {
			textAlign: 'right',
		},
		'.text-center': {
			textAlign: 'center',
		},
		'.text-justify': {
			textAlign: 'justify',
		},
		'.text-nowrap': {
			whiteSpace: 'nowrap',
		},

		// Text colors
		'.text-primary': {
			color: colors.primary.default,
		},
		'.text-hero': {
			color: colors.hero.default,
		},
		'.text-neutral': {
			color: colors.neutral.default,
		},
		'.text-muted': {
			color: colors.muted,
		},
		'.text-success': {
			color: colors.success.default,
		},
		'.text-information': {
			color: colors.information.default,
		},
		'.text-warning': {
			color: colors.warning.default,
		},
		'.text-danger': {
			color: colors.danger.default,
		},
	};

	return (
		<>
			<Global styles={mq(merge(styleReset, styleTypography, styleFont, styleTextExtensions))} />
			{children}
		</>
	);
};
