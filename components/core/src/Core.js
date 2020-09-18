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
				label: 'GELCore', // This label is being tested for in the blender. Have to change in both places
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
			{children}
		</div>
	);
};
