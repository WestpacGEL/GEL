/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const InputClusterItem = ({ horizontal, ...props }) => {
	const {
		form: { cluster },
	} = useTheme();

	const common = {
		marginRight: horizontal ? cluster.item.horizontal.marginRight : null,
		display: horizontal ? 'flex' : null,
		flexDirection: horizontal ? 'column' : null,
		justifyContent: horizontal ? 'flex-end' : null,

		// Subequent items
		'& + &': {
			marginTop: !horizontal ? cluster.item.default.marginTop : null,
		},
	};

	return <div css={common} {...props} />;
};

// ==============================
// Types
// ==============================

InputClusterItem.propTypes = {
	/**
	 * Component children
	 */
	children: PropTypes.node,
};

InputClusterItem.defaultProps = {};
