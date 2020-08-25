/** @jsx jsx */

import { jsx, CacheProvider } from '@emotion/core';
import { Fragment, useState } from 'react';
import createCache from '@emotion/cache';

import { useBrand } from './Brand';
import { reset } from './reset';

const label = 'Core';

const AddRootClass = ({ children }) => {
	let [cache] = useState(() => {
		return createCache({
			stylisPlugins: [
				(context, content, selectors, parent, line, column, length) => {
					if (
						selectors.length &&
						selectors[0] !== '' // exclude <Global /> styles
					) {
						if (context === -1) {
							// Prepend with `.GEL` class selector
							selectors[0] = `.GEL ${selectors[0]}`;
						}
						if (context === -2) {
							/**
							 * Amend selectors
							 * ---
							 * We need to remove any unnecessary internal '.GEL ' strings injected
							 * during context -1.
							 *
							 * Tested examples:
							 *
							 * Stacked selectors (&&)
							 * .GEL .css-hash.GEL .css-hash {} ==> .GEL .css-hash.css-hash {}
							 *
							 * Descendant selectors (& &)
							 * .GEL .css-hash .GEL .css-hash {} ==> .GEL .css-hash .css-hash {}
							 *
							 * Child selectors (&>& and & > &)
							 * .GEL .css-hash>.GEL .css-hash {} ==> .GEL .css-hash>.css-hash {}
							 * .GEL .css-hash > .GEL .css-hash {} ==> .GEL .css-hash > .css-hash {}
							 *
							 * Adjacent sibling selectors (&+& and & + &)
							 * .GEL .css-hash+.GEL .css-hash {} ==> .GEL .css-hash+.css-hash {}
							 * .GEL .css-hash + .GEL .css-hash {} ==> .GEL .css-hash + .css-hash {}
							 *
							 * General sibling selectors (&~& and & ~ &)
							 * .GEL .css-hash~.GEL .css-hash {} ==> .GEL .css-hash~.css-hash {}
							 * .GEL .css-hash ~ .GEL .css-hash {} ==> .GEL .css-hash ~ .css-hash {}
							 *
							 * Note: We also have to consider media queries provided to Emotion as
							 * array values. These are filtered out, identified as `}.GEL `.
							 *
							 * Regex explanation
							 * - (?<=.) Positive lookback (. Dot. Matches any character except line breaks)
							 * - (?<!{) Negative lookback ({ Character. Matches a "{" character)
							 * - (\.GEL ) Capturing group #1 matches '.GEL '
							 * - /g Global search
							 */
							content = content.replace(/(?<=.)(?<!{)(\.GEL )/g, '');
						}
					}
					return content;
				},
			],
		});
	});
	return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export const Core = ({ noReset, children }) => {
	const { COLORS, TYPE, PACKS } = useBrand();

	return (
		<div
			className="GEL"
			css={{
				label,
				lineHeight: 1.428571429,
				color: COLORS.text,
				fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
				...TYPE.bodyFont[400],
				'& *:focus': {
					...PACKS.focus,
				},
				'& [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring, button:-moz-focusring': {
					// button:focus because of normalize reset (needs higher specificity)
					...PACKS.focus,
				},
				'& *::selection': {
					backgroundColor: COLORS.tints.primary20,
				},
				'&': {
					...(!noReset && reset),
				},
			}}
		>
			<AddRootClass>{children}</AddRootClass>
		</div>
	);
};
