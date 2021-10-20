/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const itemStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('compacta-item'),
		backgroundColor: COLORS.light,
		marginBottom: '0.375rem',
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
