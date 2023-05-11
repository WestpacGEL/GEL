import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ItemIndex = ({ state: { indexTag: Tag }, ...rest }) => <Tag {...rest} />;

// ==============================
// Styles
// ==============================

const itemIndexStyles = () => ({
	label: getLabel('repeater-itemIndex'),
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
