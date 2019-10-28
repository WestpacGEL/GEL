/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import PropTypes from 'prop-types';
import pkg from '../package.json';
import { Fragment } from 'react';

// ==============================
// Component
// ==============================

export const Badge = ({ look, value, ...props }) => {
	const { COLORS, BRAND, [pkg.name]: localBrandTokens } = useBrand();

	let color = '#fff';
	if (look === 'hero' && BRAND === 'STG') {
		color = COLORS.text;
	}
	if (look === 'faint') {
		color = COLORS.muted;
	}

	const localTokens = {
		primary: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		hero: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		neutral: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		faint: {
			css: {
				color,
				backgroundColor: '#fff',
				borderColor: COLORS.border,
			},
		},
		success: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		info: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		warning: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		danger: {
			css: {
				color,
				backgroundColor: COLORS[look],
				borderColor: COLORS[look],
			},
		},
		Wrapper: Fragment,
	};
	merge(localTokens, localBrandTokens);

	return (
		<span
			css={{
				border: `1px solid transparent`,
				borderRadius: '0.75rem',
				display: 'inline-block',
				fontSize: '0.875rem',
				fontWeight: 700,
				lineHeight: 1,
				minWidth: '0.625rem',
				padding: '0.25rem 0.4375rem',
				textAlign: 'center',
				verticalAlign: 'baseline',
				whiteSpace: 'nowrap',
				...localTokens[look].css,

				'@media print': {
					color: '#000',
					backgroundColor: '#fff',
					border: '1px solid #000',
				},
			}}
			{...props}
		>
			<localTokens.Wrapper look={look}>{value}</localTokens.Wrapper>
		</span>
	);
};

// ==============================
// Types
// ==============================

Badge.propTypes = {
	/**
	 * Badge look
	 */
	look: PropTypes.oneOf([
		'primary',
		'hero',
		'neutral',
		'faint',
		'success',
		'info',
		'warning',
		'danger',
	]),

	/**
	 * Badge text
	 */
	value: PropTypes.string.isRequired,
};

Badge.defaultProps = {
	look: 'neutral',
};
