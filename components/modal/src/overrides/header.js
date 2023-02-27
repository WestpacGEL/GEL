import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('modal-header'),
		borderBottom: `1px solid ${COLORS.hero}`,
		padding: '1rem 2.25rem 0.75rem 1.5rem',
	};
};

// ==============================
// Attributes
// ==============================

const headerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};
