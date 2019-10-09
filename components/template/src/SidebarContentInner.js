/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { useSidebarContext } from './Sidebar';

// ==============================
// Component
// ==============================

export const SidebarContentInner = props => {
	const { COLORS, LAYOUT } = useTheme();
	const mq = useMediaQuery();
	const { open } = useSidebarContext();

	const minWidth = width => `@media (min-width: ${width}px)`;
	const maxWidth = width => `@media (max-width: ${width}px)`;

	return (
		<div
			css={mq({
				flex: 1, //fill vertical
				height: '100%',
				overflowY: 'auto',
				WebkitOverflowScrolling: 'touch',
				display: 'flex',
				flexDirection: 'column',
				display: [`${open ? 'flex' : 'none'}`, null, 'flex'], //XS & SM hide (to disable keyboard focus)
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

SidebarContentInner.propTypes = {
	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

SidebarContentInner.defaultProps = {};
