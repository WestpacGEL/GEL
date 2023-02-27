import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const List = ({ state: _, ...props }) => <ol {...props} />;

// ==============================
// Styles
// ==============================

const listStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('breadcrumb-list'),
		padding: `${SPACING(1)} ${SPACING(3)}`,
		marginBottom: SPACING(4, 'minor'),
		fontSize: '0.8125rem',
		listStyle: 'none',
	};
};

// ==============================
// Attributes
// ==============================

const listAttributes = () => ({
	role: 'list',
});

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
