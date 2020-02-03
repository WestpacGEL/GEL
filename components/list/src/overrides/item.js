/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import svgToTinyDataURI from 'mini-svg-data-uri';
import React from 'react';

export const Item = ({ look, type, nested, spacing, icon, overrides, ...rest }) => <li {...rest} />;

export const itemStyles = (_, { type, look, spacing, nested }) => {
	const { COLORS } = useBrand();

	const linkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${COLORS.primary}" fillRule="evenodd" points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"/></svg>`;
	const tickSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${COLORS.primary}" points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"/></svg>`;
	const styleMap = {
		bullet: {
			'::before': {
				content: '""',
				position: 'absolute',
				left: '0.25rem',
				top: '0.375rem',
				display: 'block',
				width: '0.5rem',
				height: '0.5rem',
				borderRadius: '50%',
				border: `1px solid ${COLORS[look]}`,
				backgroundColor: nested > 0 ? 'transparent' : COLORS[look],
				boxSizing: 'border-box',
			},
		},
		link: {
			'::before': {
				content: "''",
				position: 'absolute',
				left: 0,
				top: '0.125rem',
				display: 'block',
				width: '1rem',
				height: '1rem',
				backgroundImage: `url("${svgToTinyDataURI(linkSVG)}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				boxSizing: 'border-box',
			},
			a: {
				color: COLORS.text,
				textDecoration: 'none',

				':hover': {
					textDecoration: 'underline',
				},
			},
		},
		tick: {
			'::before': {
				content: "''",
				position: 'absolute',
				left: 0,
				top: '0.125rem',
				display: 'block',
				width: '1rem',
				height: '1rem',
				backgroundImage: `url("${svgToTinyDataURI(tickSVG)}")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				boxSizing: 'border-box',
			},
		},
		unstyled: {
			paddingLeft: 0,
			li: {
				paddingLeft: '1.1875rem',
			},
		},
		icon: {
			paddingLeft: '1.4375rem',
		},
		ordered: {
			paddingLeft: 0,
		},
	};

	return {
		margin: spacing === 'large' ? '0.75rem 0' : '0.375rem 0',
		listStyle: type !== 'ordered' && 'none',
		paddingLeft: '1.1875rem',
		position: 'relative',
		...styleMap[type],
	};
};
