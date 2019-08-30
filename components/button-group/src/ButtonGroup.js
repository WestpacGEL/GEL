/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const ButtonGroup = ({ appearance, size, block, name, children, ...props }) => {
	// Pass the selected props on to children
	const childrenWithProps = Children.map(children, child =>
		cloneElement(child, { appearance, size, name })
	);

	return (
		<div
			css={{
				display: block ? 'flex' : 'inline-flex',
				alignItems: 'center', //vertical
				verticalAlign: 'middle',
			}}
			{...props}
		>
			{childrenWithProps}
		</div>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: ['primary', 'hero', 'neutral', 'faint'],
	size: ['small', 'medium', 'large', 'xlarge'],
};

ButtonGroup.propTypes = {
	/**
	 * Button group button appearance.
	 *
	 * This prop is passed to children.
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Button group button size.
	 *
	 * This prop is passed to children.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Block mode.
	 *
	 * Fit button group width to its parent width.
	 */
	block: PropTypes.bool,

	/**
	 * Button group button input element’s name.
	 *
	 * This prop is passed to children.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Button group children
	 */
	children: PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {
	appearance: 'hero',
	size: 'medium',
	block: false,
};
