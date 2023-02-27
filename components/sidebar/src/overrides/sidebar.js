import { jsx, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Sidebar = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const sidebarStyles = (_, { offsetTop }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('sidebar'),
		marginTop: offsetTop ? offsetTop : [null, null, null, 'calc(4.0625rem + 1px)'],
		position: ['sticky', null, null, 'fixed'],
		zIndex: [10, null, null, 1030],
		top: 0,
		bottom: [null, null, null, 0],
		right: [null, null, null, 0],
		left: [null, null, null, 'auto'],
		width: [null, null, null, '300px'],
		backfaceVisibility: [null, null, null, 'hidden'],
		borderLeft: [null, null, null, '1px solid #e8e8ed'],
	})[0];
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
