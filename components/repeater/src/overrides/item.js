import { jsx, getLabel, useBrand } from '@westpac/core';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Item = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

Item.displayName = 'Item';
// ==============================
// Styles
// ==============================

const itemStyles = (_, { separator }) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-item'),
		position: 'relative',
		paddingTop: separator && '0.625rem',
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
