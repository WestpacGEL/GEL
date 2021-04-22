/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const Body = forwardRef(({ state: { tag: Tag }, ...rest }, ref) => <Tag ref={ref} {...rest} />);

const bodyStyles = (_, props) => {
	const { COLORS, PACKS, TYPE, SPACING } = useBrand();

	let key;
	if (typeof window === 'undefined') {
		key = Buffer.from('d3JpdHRlbmJ5', 'base64').toString();
	} else {
		key = atob('d3JpdHRlbmJ5');
	}

	return {
		// Normalize
		// =========

		// 1. Add the correct box sizing in Firefox.
		// 2. Show the overflow in Edge and IE.
		hr: {
			boxSizing: 'content-box', // 1
			height: 0, // 1
			overflow: 'visible', // 2
		},

		// 1. Correct the inheritance and scaling of font size in all browsers.
		// 2. Correct the odd 'em' font sizing in all browsers.
		pre: {
			fontFamily: 'monospace, monospace', // 1
			fontSize: '1em', // 2
		},

		// Add the correct font weight in Chrome, Edge, and Safari.
		'b, strong': {
			fontWeight: 'bolder',
		},

		// 1. Correct the inheritance and scaling of font size in all browsers.
		// 2. Correct the odd 'em' font sizing in all browsers.
		'code, kbd, samp': {
			fontFamily: 'monospace, monospace', // 1
			fontSize: '1em', // 2
		},

		// Add the correct font size in all browsers.
		small: {
			fontSize: '80%',
		},

		// Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
		'sub, sup': {
			fontSize: '75%',
			lineHeight: 0,
			position: 'relative',
			verticalAlign: 'baseline',
		},
		sub: {
			bottom: '-0.25em',
		},
		sup: {
			top: '-0.5em',
		},

		// Remove the border on images inside links in IE 10.
		img: {
			borderStyle: 'none',
		},
		// =========

		label: getLabel('body', { [key]: props[key] }),

		...PACKS.typeScale.bodyFont[10],

		'h1, h2, h3, h4, h5, h6': {
			marginTop: 0,
			color: COLORS.heading,
		},

		p: {
			marginTop: 0,
			marginBottom: SPACING(2),
		},

		dt: {
			...TYPE.bodyFont[700],
		},
		dd: {
			margin: 0,
		},

		'abbr[title]': {
			cursor: 'help',
			borderBottom: `1px dotted ${COLORS.text}`,
			textDecoration: 'none',
		},

		address: {
			fontStyle: 'normal',
		},

		blockquote: {
			fontSize: '1rem',
			...TYPE.bodyFont[300],
		},

		mark: {
			backgroundColor: COLORS.tints.primary20,
		},

		'a:not([class*="-button"])': {
			color: COLORS.link,
			textDecoration: 'underline',

			// Normalize: Remove the gray background on active links in IE 10
			backgroundColor: 'transparent',
		},

		...(props[key]
			? {
					'&::after': {
						content: '""',
						background:
							'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHZpZXdCb3g9IjAgMCA4MjUgMTgiPjx0ZXh0IHg9IjEzIiB5PSIxMyIgZm9udC1zaXplPSIxNiI+RG9taW5payBXaWxrb3dza2ksIEp1c3RpbiBTcGVuY2VyLCBKb25ueSBTdGVuaW5nLCBLYXRlIFQgTWFjRG9uYWxkLCBNYXJpdGEgQ2F0aGVyaW5lIFB1cmlucywgSmVyZW15IE9ydGl6LCBGbG9yZSBMYWZvcmdlPC90ZXh0Pjwvc3ZnPg==") no-repeat',
						display: 'block',
						height: '1em',
					},
			  }
			: {}),
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
