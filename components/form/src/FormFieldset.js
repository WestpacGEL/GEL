/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { FormLabel } from './FormLabel';
import { FormContext } from './Form';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormFieldset = ({ legend, children, ...props }) => {
	const { spacing } = useContext(FormContext);

	const common = {
		border: 'none',
		margin: 0,
		padding: 0,

		// TODO candidate for a global reset in Core? (as with GUI2.0)
		legend: {
			color: 'inherit',
			maxWidth: '100%',
			padding: 0,
			whiteSpace: 'normal',
		},
	};

	return (
		<fieldset css={common} {...props}>
			<FormLabel tag="legend" spacing={spacing}>
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
