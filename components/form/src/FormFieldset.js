/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

import { FormLabel } from './';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormFieldset = ({ legend, inline, children, ...props }) => {
	// Common styling
	const styleCommon = {
		border: 'none',
		margin: 0,
		padding: 0,
	};

	return (
		<fieldset css={styleCommon} {...props}>
			<FormLabel tag="legend" size="small">
				{legend}
			</FormLabel>
			{children}
		</fieldset>
	);
};

// ==============================
// Types
// ==============================

FormFieldset.propTypes = {
	/**
	 * Fieldset legend text.
	 *
	 * This prop is required.
	 */
	legend: PropTypes.string.isRequired,

	/**
	 * The content for this fieldset.
	 */
	children: PropTypes.node,
};

FormFieldset.defaultProps = {};
