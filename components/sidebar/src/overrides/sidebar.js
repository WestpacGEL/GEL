/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Sidebar = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const sidebarStyles = () => {
	const { LAYOUT } = useBrand();
	return {
		label: getLabel('sidebar'),
		[`@media (max-width: ${LAYOUT.breakpoints.md}px)`]: {
			position: 'sticky',
			zIndex: 10,
			top: 0,
		},
		[`@media (min-width: ${LAYOUT.breakpoints.md}px)`]: {
			position: 'fixed',
			zIndex: 1030,
			width: '300px',
			top: 0,
			bottom: 0,
			right: 0,
			left: 'auto',
			backfaceVisibility: 'hidden',
			borderLeft: '1px solid #e8e8ed',
			marginTop: 'calc(4.0625rem + 1px)',
		},
	};
};

// ==============================
// Attributes
// ==============================

const sidebarAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSidebar = {
	component: Sidebar,
	styles: sidebarStyles,
	attributes: sidebarAttributes,
};
