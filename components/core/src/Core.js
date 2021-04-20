/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useBrand } from './Brand';
import { reset } from './reset';

export const Core = ({ noReset, children }) => {
	const { COLORS, TYPE, PACKS } = useBrand();

	return (
		<div
			className="GEL"
			css={{
				label: 'core',
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
			{children}
		</div>
	);
};
