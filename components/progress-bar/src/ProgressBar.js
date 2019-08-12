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
	// Common styling
	const common = {
		height: skinny ? 10 : 24,
		marginBottom: 21,
		overflow: 'hidden',
		backgroundColor: '#fff',
		borderRadius: 1000,
		border: '1px solid #d7d2cb',
		position: 'relative',
	};

	const styleBar = {
		position: 'relative',
		float: 'left',
		width: 0,
		height: '100%',
		fontSize: 14,
		fontWeight: 700,
		lineHeight: '20px',
		color: '#fff',
		textAlign: 'right',
		backgroundColor: '#621a4b',
		borderRadius: 999,
		border: '1px solid #fff',
		zIndex: 2,
		overflow: 'hidden',
		transition: 'width .6s ease',
	};

	const styleText = {
		margin: '0 12px',
	};

	return (
		<div css={common} {...props}>
			<div
				css={{ ...styleBar, ...{ width: `${valuenow}%` } }}
				role="progressbar"
				aria-valuemin={valuemin}
				aria-valuemax={valuemax}
				aria-valuenow={valuenow}
				aria-live="polite"
			>
				{!skinny && <span css={styleText}>45%</span>}
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
