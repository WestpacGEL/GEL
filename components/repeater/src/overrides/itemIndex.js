import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ItemIndex = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const itemIndexStyles = () => ({
	label: getLabel('repeater-itemIndex'),
	// flex: '0 0 auto',
	// width: '1.5rem',
	fontWeight: 'bold',
	marginBottom: '1.125rem',
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
