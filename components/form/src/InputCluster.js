/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const InputCluster = ({ isHorizontal, children, ...props }) => {
	// Pass the selected prop on to children (that way InputClusterItem styling can be set by parent InputCluster)
	const giftedChildren = Children.map(children, child => {
		return React.isValidElement(child) ? cloneElement(child, { isHorizontal }) : child;
	});

	return (
		<div
			css={{
				display: isHorizontal && 'flex',
				flexWrap: isHorizontal && 'wrap',
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
	isHorizontal: PropTypes.bool,

	/**
	 * Component children
	 */
	children: PropTypes.node,
};

InputCluster.defaultProps = {
	isHorizontal: false,
};
