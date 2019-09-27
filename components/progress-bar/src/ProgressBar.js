/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Component
// ==============================

/**
 * Progress Bar: A visual indication of progress. Use when loading content or to indicate how far along the user is in a journey.
 */
export const ProgressBar = ({ value, isSkinny, ...props }) => {
	const { COLORS } = useTheme();

	const valueRound = Math.round(value);

	const size = isSkinny ? 'skinny' : 'default';

	const styleSize = {
		default: {
			height: '1.5rem',
		},
		skinny: {
			height: '0.625rem',
		},
	};

	const styleSizeMap = {};

	const styleCommon = {
		height: styleSize[size].height,
		marginBottom: '1.3125rem',
		overflow: 'hidden',
		backgroundColor: '#fff',
		borderRadius: styleSize[size].height,
		border: `1px solid ${COLORS.border}`,
		padding: '0.0625rem',
		position: 'relative',

		'::after': {
			display: isSkinny && 'none',
			content: '"0%"',
			position: 'absolute',
			left: '0.625rem',
			top: 0,
			height: '100%',
			color: '#575f65',
			fontSize: '0.875rem',
			fontWeight: 700,
			zIndex: 1,
		},
	};

	const styleBar = {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'relative',
		float: 'left',
		width: 0,
		height: '100%',
		fontSize: '0.875rem',
		fontWeight: 700,
		lineHeight: '1.25rem',
		color: '#fff',
		textAlign: 'right',
		backgroundColor: COLORS.hero,
		borderRadius: styleSize[size].height,
		zIndex: 2,
		overflow: 'hidden',
		transition: 'width .6s ease',

		'@media print': {
			backgroundColor: '#000 !important',

			span: {
				color: '#fff !important',
				backgroundColor: '#000 !important',
			},
		},
	};

	return (
		<div css={styleCommon} {...props}>
			<div
				css={styleBar}
				style={{ width: `${valueRound}%` }}
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={value}
				aria-live="polite"
			>
				{!isSkinny && (
					<span css={{ display: 'inline-block', margin: '0 0.75rem' }}>{valueRound}%</span>
				)}
				<SrOnly>Complete</SrOnly>
			</div>
		</div>
	);
};

// ==============================
// Types
// ==============================

ProgressBar.propTypes = {
	/**
	 * The progress bar value as a percentage. Decimal numbers are rounded.
	 */
	value: PropTypes.number,

	/**
	 * Enable skinny mode
	 */
	isSkinny: PropTypes.bool,
};

ProgressBar.defaultProps = {
	value: 0,
	isSkinny: false,
};
