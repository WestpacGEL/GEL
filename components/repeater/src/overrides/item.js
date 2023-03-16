import { jsx, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const itemStyles = (_, { separator }) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-item'),
		position: 'relative',
		paddingTop: separator && '0.625rem',
		paddingBottom: separator && '1.875rem',
		borderTop: separator && `2px solid ${COLORS.neutral}`,
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
