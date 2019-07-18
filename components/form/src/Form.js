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

export const Form = ({ spacing, children, ...props }) => {
	// Pass these selected props on to children (that way our children’s styling can be set by the parent Form), but allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child)
			? cloneElement(child, { spacing })
			: child
	});

	return (
		<form {...props}>
			{giftedChildren}
		</form>
	);
};

// ==============================
// Types
// ==============================

const options = {
	spacing: ['medium', 'large'],
};

Form.propTypes = {
	/**
	 * The form group spacing.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),
};

Form.defaultProps = {
	spacing: 'medium'
};
