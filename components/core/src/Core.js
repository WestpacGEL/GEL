/** @jsx jsx */

import { jsx, CacheProvider } from '@emotion/core';
import { useState } from 'react';
import createCache from '@emotion/cache';
import 'core-js/features/weak-set';

import { useBrand } from './Brand';
import { reset } from './reset';

const coreLabel = 'core';
const seen = new WeakSet();

const AddRootClass = ({ children }) => {
	let [cache] = useState(() => {
		return createCache({
			stylisPlugins: [
				// Prepend all CSS selectors that are children of the GEL wrapper (Core) with `.GEL` parent class to increase specificity
				(context, content, selectors, parents, line, column, length, id) => {
					if (
						context !== 2 || //selector block context
						context !== 3 || //@at-rule block context
						id === 107 || //@keyframes
						seen.has(selectors) ||
						seen.has(parents) ||
						!selectors.length ||
						selectors[0] === ''
					) {
						return;
					}

					seen.add(selectors);

					// Prepend selector with `.GEL `
					for (let i = 0; i < selectors.length; i++) {
						/**
						 * Don't process the following...
						 * 1. `html` or `body` selectors, possible if styles are passed to Emotion's `<Global />` component within the `<GEL>` wrapper (e.g. `<GEL><Global styles={{ 'body': { margin: 0 } }} /></GEL>)` or simply passed as a parent selector (e.g. `body &: { margin: 0 }`)
						 * 2. Core components (we don't want to increase Core's specificity)
						 * 3. Selectors already prepended with `.GEL `
						 */
						if (
							!selectors[i].includes('html') /* 1 */ &&
							!selectors[i].includes('body') /* 1 */ &&
							!selectors[i].includes(`-${coreLabel}`) /* 2 */ &&
							!selectors[i].includes('.GEL ') /* 3 */
						) {
							// @at-rule block context
							if (context === 3) {
								content = `.GEL ${content}`;
							}

							selectors[i] = `.GEL ${selectors[i]}`;
						}
					}
				},
			],
		});
	});
	return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export const Core = ({ noReset, noScope, children }) => {
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

				'*:focus': {
					...PACKS.focus,
				},
				// Also apply to the following selectors to increase specificity (against normalize reset)
				'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
					...PACKS.focus,
				},
				'[tabindex="-1"]:focus': {
					outline: '0 !important',
				},
				'& ::selection': {
					backgroundColor: COLORS.tints.primary20,
				},
				'&': {
					...(!noReset && reset),
				},
			}}
		>
			{noScope ? children : <AddRootClass>{children}</AddRootClass>}
		</div>
	);
};
