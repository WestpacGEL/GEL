import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const HeaderTitle = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerTitleStyles = () => ({
	label: getLabel('compacta-header-title'),
	flex: '1',
	display: 'flex',
	alignItems: 'center',
	minWidth: 0,
});

// ==============================
// Attributes
// ==============================

const headerTitleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeaderTitle = {
	component: HeaderTitle,
	styles: headerTitleStyles,
	attributes: headerTitleAttributes,
};
