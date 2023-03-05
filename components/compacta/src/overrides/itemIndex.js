import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ItemIndex = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const itemIndexStyles = () => ({
	label: getLabel('compacta-itemIndex'),
	flex: '0 0 auto',
	width: '1.5rem',
	fontWeight: 'bold',
	marginRight: '12px',
});

// ==============================
// Attributes
// ==============================

const itemIndexAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItemIndex = {
	component: ItemIndex,
	styles: itemIndexStyles,
	attributes: itemIndexAttributes,
};
