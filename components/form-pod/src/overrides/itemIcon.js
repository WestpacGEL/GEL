/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ItemIcon = ({ icon: Icon, color, state: _, ...rest }) => {
	const { COLORS } = useBrand();

	return <Icon size="medium" color={color ? color : COLORS.primary} {...rest} />;
};

// ==============================
// Styles
// ==============================

const itemIconStyles = () => {
	return {
		label: getLabel('formPod-item-icon'),
		// marginRight: [null, '0.75rem'], //TODO: multiple contact items?
		marginRight: '0.75rem',
	};
};

// ==============================
// Attributes
// ==============================

const itemIconAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItemIcon = {
	component: ItemIcon,
	styles: itemIconStyles,
	attributes: itemIconAttributes,
};
