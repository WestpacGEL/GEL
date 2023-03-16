import { jsx, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const HeaderSecondary = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerSecondaryStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('compacta-header-secondary'),
		paddingLeft: '2.25rem',
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		minWidth: 0,
		color: COLORS.muted,
	};
};

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
