/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormInputsItem = ({ horizontal, ...props }) => {
	const { form } = useTheme();

	const common = {
		marginRight: horizontal ? form.inputs.item.horizontal.marginRight : null,
		display: horizontal ? 'flex' : null,
		flexDirection: horizontal ? 'column' : null,
		justifyContent: horizontal ? 'flex-end' : null,

		// Subequent items
		'& + &': {
			marginTop: !horizontal ? form.inputs.item.default.marginTop : null,
		},
	};

	return <div css={common} {...props} />;
};

// ==============================
// Types
// ==============================

FormInputsItem.propTypes = {
	/**
	 * Component children.
	 */
	children: PropTypes.node,
};

FormInputsItem.defaultProps = {};
