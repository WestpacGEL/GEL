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

export const FormInputs = ({ horizontal, spacing, inline, children, ...props }) => {
	// Common styling
	const styleCommon = {
		display: horizontal ? 'flex' : null,
		flexWrap: horizontal ? 'wrap' : null,
	};

	const styleItem = {
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
		<div css={styleCommon} {...props}>
			{Children.map(children, child => (
				<div css={styleItem}>{child}</div>
			))}
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
