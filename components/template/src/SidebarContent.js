/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { useSidebarContext } from './Sidebar';

// ==============================
// Component
// ==============================

export const SidebarContent = props => {
	const { LAYOUT } = useTheme();
	const mq = useMediaQuery();
	const { open } = useSidebarContext();

	const maxWidth = width => `@media (max-width: ${width}px)`;

	return (
		<div
			css={mq({
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				backgroundColor: '#fff',

				// XS & SM
				[maxWidth(LAYOUT.breakpoints.md - 1)]: {
					position: 'fixed',
					zIndex: 1030,
					top: 0,
					bottom: 0,
					right: 0,
					transform: `translateX(${open ? 0 : '100%'})`, //hide/show (off-cavnas)
					transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
					willChange: 'visibility transform',
					width: '100%',
					maxWidth: '18.75rem',
				},
			})}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

SidebarContent.propTypes = {
	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

SidebarContent.defaultProps = {};
