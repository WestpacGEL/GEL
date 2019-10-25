/** @jsx jsx */

import { Global, jsx } from '@emotion/core';
import { Fragment } from 'react';
import merge from 'lodash.merge';

import { useBrand } from './Brand';
import { reset } from './reset';

export const Core = ({ children }) => {
	const { COLORS, TYPE, PACKS } = useBrand();

	return (
		<Fragment>
			<Global styles={reset} />
			<Global
				styles={{
					body: {
						fontWeight: 400,
						fontSize: '0.875rem', // (14px)
						lineHeight: 1.428571429,
						color: COLORS.text,
						fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
						fontFamily: TYPE.bodyFont.fontFamily,
					},
					':focus, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring, button:-moz-focusring': {
						// button:focus because of normalize reset (needs higher specificity)
						...PACKS.focus,
					},
					'::selection': {
						backgroundColor: COLORS.tints.primary20,
					},
				}}
			/>
			{children}
		</Fragment>
	);
};
