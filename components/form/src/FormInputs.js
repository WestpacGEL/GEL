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

export const FormInputs = ({ horizontal, size, spacing, inline, children, ...props }) => {
	// Common styling
	const styleCommon = {
		display: horizontal ? 'flex' : null,
		flexWrap: horizontal ? 'wrap' : null,
	};

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child)
			? cloneElement(child, { horizontal, size, spacing, inline })
			: child;
	});

	return (
		<div css={styleCommon} {...props}>
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
	 * The content for this fieldset.
	 */
	children: PropTypes.node,
};

FormInputs.defaultProps = {
	horizontal: false,
};
