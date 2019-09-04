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
export const ProgressBar = ({ value, skinny, ...props }) => {
	const { progressBar } = useTheme();

	const valueRound = Math.round(value);

	const size = skinny ? 'skinny' : 'default';

	const style = {
		// Common styling
		common: {
			height: progressBar.size[size].height,
			marginBottom: progressBar.marginBottom,
			overflow: 'hidden',
			backgroundColor: 'white',
			borderRadius: progressBar.size[size].height,
			border: `${progressBar.borderWidth} solid ${progressBar.borderColor}`,
			padding: progressBar.padding,
			position: 'relative',

			'::after': {
				content: '"0%"',
				position: 'absolute',
				left: '1rem',
				top: 0,
				height: '100%',
				color: '#575f65',
				fontSize: '1.4rem',
				fontWeight: 700,
				zIndex: 1,
			},
		},

		// Bar styling
		bar: {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
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
		},
	};

	return (
		<div css={style.common} {...props}>
			<div
				css={style.bar}
				style={{ width: `${valueRound}%` }}
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={value}
				aria-live="polite"
			>
				{!skinny && (
					<span css={{ display: 'inline-block', margin: '0 1.2rem' }}>{valueRound}%</span>
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
	skinny: PropTypes.bool,
};

ProgressBar.defaultProps = {
	value: 0,
	skinny: false,
};
