/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

import { FormLabel } from './';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormFieldset = ({ legend, spacing, inline, children, ...props }) => {
	// Common styling
	const styleCommon = {
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

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { spacing, inline }) : child;
	});

	return (
		<fieldset css={styleCommon} {...props}>
			<FormLabel tag="legend" spacing={spacing} inline>
				{legend}
			</FormLabel>
			{giftedChildren}
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
