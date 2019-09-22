/** @jsx jsx */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { HeaderButton } from './HeaderButton';

// ==============================
// Component
// ==============================

export const HeaderRight = ({ children, ...props }) => {
	const {
		breakpoints,
		template: { header },
	} = useTheme();
	const mq = paint(breakpoints);

	// Enable right padding by default
	let isPadding = true;

	// Pass the selected props on to children
	const numChildren = Children.count(children);
	const childrenWithProps = Children.map(children, (child, idx) => {
		let isLast = idx === numChildren - 1;

		// HeaderButton child
		if (isValidElement(child) && child.type && child.type === HeaderButton) {
			// Disable right padding if a HeaderButton last child
			if (isLast) isPadding = false;

			return cloneElement(child, { isRight: true });
		}
		return child;
	});

	const style = {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 'auto', //flex auto align right
		marginRight: isPadding && header.right.marginRight,
	};

	return (
		<div css={mq(style)} {...props}>
			{childrenWithProps}
		</div>
	);
};

// ==============================
// Types
// ==============================

HeaderRight.propTypes = {
	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};
HeaderRight.defaultProps = {};
