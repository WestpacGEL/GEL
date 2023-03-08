import { jsx, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const itemStyles = (_, { separator, last }) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-item'),
		position: 'relative',
		paddingTop: separator && '0.625rem',
		paddingBottom: separator && '1.875rem',
		borderTop: separator && `2px solid ${COLORS.neutral}`,
		borderBottom: separator && last && `2px solid ${COLORS.neutral}`,
		marginBottom: separator && last && '0.875rem',
	};
};

// ==============================
// Attributes
// ==============================

const itemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
