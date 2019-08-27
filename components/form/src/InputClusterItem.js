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
		marginRight: horizontal && cluster.item.horizontal.marginRight,
		display: horizontal && 'flex',
		flexDirection: horizontal && 'column',
		justifyContent: horizontal && 'flex-end',

		// Subequent items
		'& + &': {
			marginTop: !horizontal && cluster.item.default.marginTop,
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
