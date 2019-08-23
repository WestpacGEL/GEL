/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { SrOnly } from '../../accessibility-helpers/src';

// ==============================
// Component
// ==============================

/**
 * Progress Bar: A visual indication of progress. Use when loading content or to indicate how far along the user is in a journey.
 */
export const ProgressBar = ({ valueNow, skinny, ...props }) => {
	const { progressBar } = useTheme();

	const valueNowRound = Math.round(valueNow);

	const size = skinny ? 'skinny' : 'default';

	// Common styling
	const common = {
		height: progressBar.size[size].height,
		marginBottom: progressBar.marginBottom,
		overflow: 'hidden',
		backgroundColor: 'white',
		borderRadius: progressBar.size[size].height,
		border: `${progressBar.borderWidth} solid ${progressBar.borderColor}`,
		position: 'relative',

		'::after': {
			content: '"0%"',
			position: 'absolute',
			left: '10px',
			top: '1px',
			height: '100%',
			color: '#575f65',
			fontSize: '14px',
			fontWeight: 700,
			zIndex: 1,
		},
	};

	const styleBar = {
		position: 'relative',
		float: 'left',
		width: 0,
		height: '100%',
		fontSize: progressBar.fontSize,
		fontWeight: progressBar.fontWeight,
		lineHeight: progressBar.lineHeight,
		color: progressBar.color,
		textAlign: 'right',
		backgroundColor: progressBar.backgroundColor,
		borderRadius: progressBar.size[size].height,
		border: `${progressBar.borderWidth} solid white`,
		zIndex: 2,
		overflow: 'hidden',
		transition: 'width .6s ease',

		'@media print': {
			backgroundColor: 'black !important',

			span: {
				color: 'white !important',
				backgroundColor: 'black !important',
			},
		},
	};

	return (
		<div css={common} {...props}>
			<div
				css={styleBar}
				style={{ width: `${valueNowRound}%` }}
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={valueNow}
				aria-live="polite"
			>
				{!skinny && <span css={{ margin: '0 12px' }}>{valueNowRound}%</span>}
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
	valueNow: PropTypes.number,
	/**
	 * Skinny mode.
	 */
	skinny: PropTypes.bool,
};

ProgressBar.defaultProps = {
	skinny: false,
};
