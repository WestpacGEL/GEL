/** @jsx jsx */

import { jsx, CacheProvider } from '@emotion/core';
import { Fragment, useState } from 'react';
import createCache from '@emotion/cache';

import { useBrand } from './Brand';
import { reset } from './reset';

const coreLabel = 'Core'; // for use in stylis plugin and the css label

const AddRootClass = ({ children }) => {
	let [cache] = useState(() => {
		return createCache({
			stylisPlugins: [
				(context, content, selectors) => {
					if (
						context === -2 &&
						selectors.length &&
						selectors[0] !== '' && // exclude <Global /> styles
						!selectors[0].includes(`-${coreLabel}`) // exclude nested <GEL /> (Core) styles
					) {
						/* 1. Strip any parsed CSS comments */
						content = content.replace(/\/\*.*?\*\//g, '');

						/**
						 * 2. Add to beginning of `content` string, if not beginning with `@`
						 * (catches `@media` and `@font-face` queries etc)
						 *
						 * Regex explanation:
						 * - ^ Beginning of string
						 * - [^@] Negated set (not `@` symbol)
						 * - .* Any character except new line, match 0 or more
						 * - /g Global search
						 */
						content = content.replace(/^[^@].*/g, (s) => `.GEL ${s}`);

						/**
						 * 3. Additionally, consider selectors found within the same string (e.g. child selectors)
						 *
						 * Regex explanation:
						 * - (;}) Capture group #1 matching `;}`
						 * - ([^@/}]) Capture group #2 matching negated set (not `@`, `/` or `}` symbol)
						 * - /g Global search
						 */
						content = content.replace(/(;})([^@/}])/g, '$1.GEL $2');

						/**
						 * 4. Additionally, insert within all @media queries
						 *
						 * Regex explanation:
						 * - @ Match `@` character
						 * - .+ Any character except new line, match 1 or more
						 * - ? Makes the preceding quantifier lazy, causing it to match as few characters as possible
						 * - /g Global search
						 *
						 * - i.e. match `@media (min-width:576px){` and `@print {`
						 */
						content = content.replace(/@.+?\{/g, (s) => `${s}.GEL `);
					}
					return content;
				},
			],
		});
	});
	return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export const Core = ({ noReset, noPrefix, children }) => {
	const { COLORS, TYPE, PACKS } = useBrand();

	return (
		<div
			className="GEL"
			css={{
				label: coreLabel,
				lineHeight: 1.428571429,
				color: COLORS.text,
				fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
				...TYPE.bodyFont[400],
				'& *:focus': {
					...PACKS.focus,
				},
				'& button:-moz-focusring, & [type="button"]:-moz-focusring, & [type="reset"]:-moz-focusring, & [type="submit"]:-moz-focusring': {
					// button:focus because of normalize reset (needs higher specificity)
					...PACKS.focus,
				},
				'& ::selection': {
					backgroundColor: COLORS.tints.primary20,
				},
				'&': {
					...(!noReset && reset),
				},
			}}
		>
			{noPrefix ? children : <AddRootClass>{children}</AddRootClass>}
		</div>
	);
};
