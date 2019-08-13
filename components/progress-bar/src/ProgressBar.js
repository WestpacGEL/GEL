/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { SrOnly } from '../../accessibility-helpers/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Progress Bar: A visual indication of progress. Use when loading content or to indicate how far along the user is in a journey.
 */
export const ProgressBar = ({ valueNow, skinny, ...props }) => {
	const { progressBar } = useTheme();

	// Common styling
	const common = {
		height: skinny ? progressBar.size.skinny.height : progressBar.size.default.height,
		marginBottom: progressBar.marginBottom,
		overflow: 'hidden',
		backgroundColor: 'white',
		borderRadius: skinny ? progressBar.size.skinny.height : progressBar.size.default.height,
		border: `${progressBar.borderWidth}px solid`,
		borderColor: progressBar.borderColor,
		position: 'relative',

		'::after': {
			content: '"0%"',
			position: 'absolute',
			left: '10px',
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
		borderRadius: skinny ? progressBar.size.skinny.height : progressBar.size.default.height,
		border: `${progressBar.borderWidth}px solid`,
		borderColor: 'white',
		zIndex: 2,
		overflow: 'hidden',
		transition: 'width .6s ease',
	};

	return (
		<div css={common} {...props}>
			<div
				css={styleBar}
				style={{ width: `${valueNow}%` }}
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={valueNow}
				aria-live="polite"
			>
				{!skinny && <span css={{ margin: '0 12px' }}>{valueNow}%</span>}
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
	 * The progress bar value as a percentage.
	 */
	valueNow: PropTypes.number,
	/**
	 * Skinny mode.
	 *
	 * Defaults to "false"
	 */
	skinny: PropTypes.bool,
};

ProgressBar.defaultProps = {
	skinny: false,
};
