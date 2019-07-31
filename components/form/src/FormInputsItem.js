/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormInputsItem = ({ horizontal, size, spacing, inline, children, ...props }) => {
	const { form } = useTheme();

	const styleCommon = {
		marginRight: horizontal ? form.inputs.item.horizontal.marginRight : null,
		display: horizontal ? 'flex' : null,
		flexDirection: horizontal ? 'column' : null,
		justifyContent: horizontal ? 'flex-end' : null,

		// Subequent items
		'& + &': {
			marginTop: !horizontal ? form.inputs.item.default.marginTop : null,
		},
	};

	// Pass the selected styling props on to children
	// TODO allow any children props to take precedence if provided
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { size, spacing, inline }) : child;
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

FormInputsItem.propTypes = {
	/**
	 * The content for this fieldset.
	 */
	children: PropTypes.node,
};

FormInputsItem.defaultProps = {};
