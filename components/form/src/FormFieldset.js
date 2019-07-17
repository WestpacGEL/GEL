/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormFieldset = ({ legend, children, ...props }) => {
	// Common styling
	const styleCommon = {
		border: 'none',
		margin: 0,
		padding: 0,
	};

	const styleLegend = {}; //TODO - should legend be composed, or via prop?

	return (
		<fieldset css={styleCommon} {...props}>
			<legend css={styleLegend}>{legend}</legend>
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
