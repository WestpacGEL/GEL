/** @jsx jsx */

import { jsx, CacheProvider } from '@emotion/core';
import { Fragment, useState } from 'react';
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
				(context, content, selectors, parents, line, column, length, type) => {
					if (
						context !== 2 ||
						type === 107 ||
						seen.has(selectors) ||
						seen.has(parents) ||
						!selectors.length ||
						selectors[0] === '' ||
						selectors[0].includes(`-${coreLabel}`)
					) {
						return;
					}

					seen.add(selectors);

					for (let i = 0; i < selectors.length; i++) {
						// Prepend selector with `.GEL `, if not `html` or `body` selectors (possible if styles are passed to Emotion's `<Global />` component within the `<GEL>` wrapper... e.g. <GEL><Global styles={{ 'body': { margin: 0 } }} /></GEL>)
						if (!['html', 'body'].includes(selectors[i])) {
							selectors[i] = `.GEL ${selectors[i]}`;
						}
					}
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
