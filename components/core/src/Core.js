/** @jsx jsx */

import { Global, jsx } from '@emotion/core';
import { Fragment } from 'react';
import merge from 'lodash.merge';

import { useBrand } from './Brand';
import { reset } from './reset';

export const Core = ({ children }) => {
	const { COLORS, TYPE } = useBrand();

	return (
		<Fragment>
			<Global styles={reset} />
			<Global
				styles={{
					...TYPE.files,
					body: {
						fontWeight: 400,
						fontSize: '0.875rem', // (14px)
						lineHeight: 1.428571429,
						color: COLORS.text,
						fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
						...TYPE.bodyFont,
					},
					':focus, button:focus': {
						// button:focus because of normalize reset (needs higher specificity)
						outline: `3px dotted ${COLORS.text}`,
						outlineOffset: '2px',
					},
					'::selection': {
						backgroundColor: COLORS.tints.primary20,
					},
					a: {
						color: COLORS.primary,
						textDecoration: 'underline',

						':hover': {
							textDecoration: 'underline',
						},
					},
				}}
			/>
			{children}
		</Fragment>
	);
};
