/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Progress Bar: A visual indication of progress. Use when loading content or to indicate how far along the user is in a journey.
 */
export const ProgressBar = ({ valuemin, valuemax, valuenow, skinny, ...props }) => {
	const { progressBar } = useTheme();

	// Common styling
	const common = {
		height: skinny ? 10 : 24,
		marginBottom: progressBar.marginBottom,
		overflow: 'hidden',
		backgroundColor: 'white',
		borderRadius: 1000,
		border: `${progressBar.borderWidth} solid`,
		borderColor: progressBar.borderColor,
		position: 'relative',
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
		borderRadius: 999,
		border: `${progressBar.borderWidth} solid`,
		borderColor: 'white',
		zIndex: 2,
		overflow: 'hidden',
		transition: 'width .6s ease',
	};

	return (
		<div css={common} {...props}>
			<div
				css={{ ...styleBar, ...{ width: `${valuenow}%` } }}
				role="progressbar"
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuenow={valuenow}
				aria-live="polite"
			>
				{!skinny && <span css={{ margin: '0 12px' }}>{valuenow}%</span>}
			</div>
		</div>
	);
};

// ==============================
// Types
// ==============================

ProgressBar.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

ProgressBar.defaultProps = {};
