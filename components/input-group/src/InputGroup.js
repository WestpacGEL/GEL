/** @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

/**
 * Input Group: Styled input fields with attached addons. Addons can be text ($, %, .00 etc) or form controls (buttons or select inputs).
 */
export const InputGroup = ({ size, children, ...props }) => {
	const childrenWithProps = Children.map(children, child => cloneElement(child, { size }));

	const style = {
		display: 'flex',

		select: {
			width: 'auto',
		},

		'select:not(:first-child)': {
			marginLeft: '-1px',
		},

		'select:not(:last-child)': {
			marginRight: '-1px',
		},

		'input:not(:first-child), span:not(:first-child), button:not(:first-child), select:not(:first-child)': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},

		'input:not(:last-child), span:not(:last-child), button:not(:last-child), select:not(:last-child)': {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		},

		'input + span': {
			borderTopRightRadius: '3px',
			borderBottomRightRadius: '3px',
		},

		'span:first-child, button:first-child': {
			borderRight: 0,
		},

		'span:last-child, button:last-child': {
			borderLeft: 0,
		},
	};

	return (
		<div css={style} {...props}>
			{childrenWithProps}
		</div>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

InputGroup.propTypes = {
	/**
	 * InputGroup size
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * InputGroup children
	 */
	children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {
	size: 'medium',
};
