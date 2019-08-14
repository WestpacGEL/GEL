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

export const FormInputs = ({ horizontal, ...props }) => {
	return (
		<div
			css={{
				display: horizontal ? 'flex' : null,
				flexWrap: horizontal ? 'wrap' : null,
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FormInputs.propTypes = {
	/**
	 * Horizontal mode.
	 *
	 * This prop is passed to child elements.
	 *
	 * Defaults to "false"
	 */
	horizontal: PropTypes.bool,

	/**
	 * Component children.
	 */
	children: PropTypes.node,
};

FormInputs.defaultProps = {
	horizontal: false,
};
