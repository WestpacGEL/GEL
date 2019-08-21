/** @jsx jsx */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { FormLabel } from './FormLabel';
import { FormContext } from './Form.context';

// ==============================
// Component
// ==============================

export const Fieldset = ({ legend, children, ...props }) => {
	const { spacing } = useContext(FormContext);

	return (
		<fieldset {...props}>
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

Fieldset.propTypes = {
	/**
	 * Fieldset legend text
	 */
	legend: PropTypes.string.isRequired,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

Fieldset.defaultProps = {};
