/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const InputClusterItem = ({ isHorizontal, ...props }) => {
	const {
		form: { cluster },
	} = useTheme();

	const common = {
		marginRight: isHorizontal && cluster.item.horizontal.marginRight,
		display: isHorizontal && 'flex',
		flexDirection: isHorizontal && 'column',
		justifyContent: isHorizontal && 'flex-end',

		// Subequent items
		'& + &': {
			marginTop: !isHorizontal && cluster.item.default.marginTop,
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
