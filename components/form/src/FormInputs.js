/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormInputs = ({ horizontal, children, ...props }) => {
	// Pass the selected prop on to children (that way FormInputsItem styling can be set by parent FormInputs)
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { horizontal }) : child;
	});

	return (
		<div
			css={{
				display: horizontal ? 'flex' : null,
				flexWrap: horizontal ? 'wrap' : null,
			}}
			{...props}
		>
			{giftedChildren}
		</div>
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
