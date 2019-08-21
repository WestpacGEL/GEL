/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const InputCluster = ({ horizontal, children, ...props }) => {
	// Pass the selected prop on to children (that way InputClusterItem styling can be set by parent InputCluster)
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { horizontal }) : child;
	});

	return (
		<div
			css={{
				display: horizontal ? 'flex' : null,
				flexWrap: horizontal ? 'wrap' : null,
			}}
			{...props}
		>
			{giftedChildren}
		</div>
	);
};

// ==============================
// Types
// ==============================

InputCluster.propTypes = {
	/**
	 * Horizontal mode.
	 *
	 * This prop is passed to child elements.
	 */
	horizontal: PropTypes.bool,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

InputCluster.defaultProps = {
	horizontal: false,
};
