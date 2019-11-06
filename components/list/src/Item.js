/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import svgToTinyDataURI from 'mini-svg-data-uri';
import { useListContext } from './List';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Item = ({ look, type, spacing, icon, children, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();

	const {
		look: lookCtx,
		type: typeCtx,
		spacing: spacingCtx,
		icon: iconCtx,
		nested,
	} = useListContext();

	look = look || lookCtx;
	type = type || typeCtx;
	spacing = spacing || spacingCtx;
	const Icon = icon || iconCtx;

	const linkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${COLORS.primary}" fillRule="evenodd" points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"/></svg>`;
	const tickSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><polygon fill="${COLORS.primary}" points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"/></svg>`;
	const overrides = {
		bulletCSS: {
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
		linkCSS: {
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
		},
		tickCSS: {
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
		unstyledCSS: {
			paddingLeft: 0,
			li: {
				paddingLeft: '1.1875rem',
			},
		},
		iconCSS: {
			paddingLeft: '1.4375rem',
		},
		orderedCSS: {
			paddingLeft: 0,
		},
		nestedListCSS: {},
	};
	merge(overrides, overridesWithTokens);

	return (
		<li
			css={{
				margin: spacing === 'large' ? '0.75rem 0' : '0.375rem 0',
				listStyle: type !== 'ordered' && 'none',
				paddingLeft: '1.1875rem',
				position: 'relative',
				...overrides[`${type}CSS`],
				...(overrides.nestedListCSS[nested] ? overrides.nestedListCSS[nested] : {}),
			}}
			{...props}
		>
			{type === 'icon' && Icon && (
				<Icon css={{ position: 'absolute', top: 0, left: 0 }} size="small" color={COLORS.muted} />
			)}
			{children}
		</li>
	);
};

// ==============================
// Types
// ==============================
Item.propTypes = {
	/**
	 * The look of the bullet list
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'neutral']),

	/**
	 * The type of the bullet
	 */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),

	/**
	 * The size of space between list elements
	 */
	spacing: PropTypes.oneOf(['medium', 'large']),

	/**
	 * The icon for list item
	 */
	icon: PropTypes.func,

	/**
	 * Any renderable content
	 */
	children: PropTypes.node.isRequired,
};
