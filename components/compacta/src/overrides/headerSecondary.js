import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const HeaderSecondary = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerSecondaryStyles = () => ({
	label: getLabel('compacta-header-secondary'),
	paddingLeft: '2.25rem',
	flex: '1',
	display: 'flex',
	alignItems: 'center',
	minWidth: 0,
});

// ==============================
// Attributes
// ==============================

const headerSecondaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeaderSecondary = {
	component: HeaderSecondary,
	styles: headerSecondaryStyles,
	attributes: headerSecondaryAttributes,
};
