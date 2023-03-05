import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const HeaderRight = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerRightStyles = () => ({
	label: getLabel('sidebar-header-right'),
	display: 'flex',
	alignItems: 'center',
	marginLeft: 'auto',
});

// ==============================
// Attributes
// ==============================

const headerRightAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeaderRight = {
	component: HeaderRight,
	styles: headerRightStyles,
	attributes: headerRightAttributes,
};
