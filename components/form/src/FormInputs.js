/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

export const FormInputsItem = ({ horizontal, inline, ...props }) => {
	// Common styling
	const styleCommon = {
		marginRight: horizontal ? '18px' : null,
		display: horizontal ? 'flex' : null,
		flexDirection: horizontal ? 'column' : null,
		justifyContent: horizontal ? 'flex-end' : null,

		// Subequent items
		'& + &': {
			marginTop: !horizontal ? '18px' : null,
		},
	};

	return (
		<div css={styleCommon} {...props} />
	);
};

// ==============================
// Component
// ==============================

export const FormInputs = ({ horizontal, inline, children, ...props }) => {
	// Common styling
	const styleCommon = {
		display: horizontal ? 'flex' : null,
		flexWrap: horizontal ? 'wrap' : null,
	};

	// Pass these selected props on to children (that way our children’s styling can be set by the parent)
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child)
			? cloneElement(child, { horizontal })
			: child
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
