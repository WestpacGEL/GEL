/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

import { Button } from '../../button/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const ButtonGroup = ({ appearance, size, block, name, children, ...props }) => {
	// Pass the selected props on to children (that way button styling can be set by parent ButtonGroup)
	const giftedChildren = Children.map(children, child =>
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
			{giftedChildren}
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
	 * Button group button appearance
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Button group button size
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Block mode
	 */
	block: PropTypes.bool,

	/**
	 * Button group button input element’s name
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
