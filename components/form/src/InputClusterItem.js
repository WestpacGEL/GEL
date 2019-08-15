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

export const InputClusterItem = ({ horizontal, ...props }) => {
	const { form } = useTheme();

	const common = {
		marginRight: horizontal ? form.cluster.item.horizontal.marginRight : null,
		display: horizontal ? 'flex' : null,
		flexDirection: horizontal ? 'column' : null,
		justifyContent: horizontal ? 'flex-end' : null,

		// Subequent items
		'& + &': {
			marginTop: !horizontal ? form.cluster.item.default.marginTop : null,
		},
	};

	return <div css={common} {...props} />;
};

// ==============================
// Types
// ==============================

InputClusterItem.propTypes = {
	/**
	 * Component children.
	 */
	children: PropTypes.node,
};

InputClusterItem.defaultProps = {};
